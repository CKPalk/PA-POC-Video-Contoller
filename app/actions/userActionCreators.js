import Immutable from 'immutable'
import 'whatwg-fetch'
import actionTypes from '../actionTypes/userActionTypes'
import { push } from './routerActionCreators'
import URIS from '../constants/routeUris'


//--- SIGN UP USER -----------------------------------------------------------//

const postSignupBefore = () =>
  ({ type: actionTypes.PHONE_NUMBER.BEFORE })

const postSignupSuccess = user =>
  ({ type: actionTypes.PHONE_NUMBER.SUCCESS, user })

const postSignupFail = error =>
  ({ type: actionTypes.PHONE_NUMBER.FAILURE, error })

/**
 * @param   {Object}  phoneNumber, firstName
 */
export function postSignup(userFields = {}) {
  return async dispatch => {
    dispatch(postSignupBefore())
    const response = await fetch('http://localhost:8085/api/user/phoneNumber', {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json',
        Accept: 'application/json',
      }),
      body: JSON.stringify(userFields)
    })
    const result = await response.json()
    const immutable = Immutable.fromJS(result)
    if (/^2[0-9][0-9]$/.test(response.status)) {
      dispatch(postSignupSuccess(immutable))
      dispatch(push(URIS.SIGNIN.VALIDATE.path))
    } else {
      dispatch(postSignupFail(immutable))
    }
  }
}

//--- VALIDATE USER ----------------------------------------------------------//

const postValidateDeviceBefore = () =>
  ({ type: actionTypes.VALIDATE_DEVICE.BEFORE })

const postValidateDeviceSuccess = user =>
  ({ type: actionTypes.VALIDATE_DEVICE.SUCCESS, user })

const postValidateDeviceFail = error =>
  ({ type: actionTypes.VALIDATE_DEVICE.FAILURE, error })

/**
 * @param   {Object}  token  User token for authentication
 */
export function postValidateDevice(userFields = {}) {
  return async dispatch => {
    dispatch(postValidateDeviceBefore())
    const response = await fetch('http://localhost:8085/api/user/validateDevice', {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-type': 'application/json'
      }),
      body: JSON.stringify(userFields)
    })
    const result = await response.json()
    const immutable = Immutable.fromJS(result)
    if (/* TODO: remove ! */ !/^2[0-9][0-9]$/.test(response.status)) {
      dispatch(postValidateDeviceSuccess(immutable))
      dispatch(push(URIS.SIGNIN.PROFILE_BUILDER.path))
    } else {
      dispatch(postValidateDeviceFail(immutable))
    }
  }
}


//--- LOGOUT USER ------------------------------------------------------------//

const logoutBefore = () => ({ type: actionTypes.LOGOUT.BEFORE })
const logoutSuccess = () => ({ type: actionTypes.LOGOUT.SUCCESS })
const logoutFailure = () => ({ type: actionTypes.LOGOUT.FAILURE })

export function logout() {
  return async dispatch => {
    dispatch(logoutBefore())
    const successful = true
    if (successful) {
      dispatch(logoutSuccess())
      dispatch(push(URIS.SIGNIN.LOGIN.path))
    } else {
      dispatch(logoutFailure())
    }
  }
}


//--- GET USER ---------------------------------------------------------------//

const getUserBefore = () =>
  ({ type: actionTypes.GET_USER.BEFORE })

const getUserSuccess = user =>
  ({ type: actionTypes.GET_USER.SUCCESS, user })

const getUserFail = error =>
  ({ type: actionTypes.GET_USER.FAILURE, error })

export function getUser() {
  return async (dispatch, getState) => {
    const token = getState().$$userStore.get('token', null)
    dispatch(getUserBefore())
    const response = await fetch('http://localhost:8085/api/user', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      })
    })
    const result = await response.json()
    const immutable = Immutable.fromJS(result)
    if (/^2[0-9][0-9]$/.test(response.status))
      dispatch(getUserSuccess(immutable))
    else
      dispatch(getUserFail(immutable))
  }
}


//---  POST USER -------------------------------------------------------------//

const postUserBefore = () =>
  ({ type: actionTypes.POST_USER.BEFORE })

const postUserSuccess = user =>
  ({ type: actionTypes.POST_USER.SUCCESS, user })

const postUserFail = () =>
  ({ type: actionTypes.POST_USER.FAILURE })

export function postUser(userFields = {}) {
  return async (dispatch, getState) => {
    const token = getState().$$userStore.get('token', null)
    dispatch(postUserBefore())
    const response = await fetch('http://localhost:8085/api/user', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }),
      body: JSON.stringify(userFields)
    })
    const result = await response.json()
    const immutable = Immutable.fromJS(result)
    if (/^2[0-9][0-9]$/.test(response.status))
      dispatch(postUserSuccess(immutable))
    else
      dispatch(postUserFail(immutable))
  }
}
