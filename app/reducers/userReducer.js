import Immutable from 'immutable'
import actionTypes from '../actionTypes/userActionTypes'

const $$initialState = Immutable.fromJS({
  user: {
    _id: '',
    phoneNumber: '',
    firstName: '',
    token: '',
    updated: undefined,
    error: { message: undefined },
    tokenError: undefined
  }
})

const actionsMap = {
  [actionTypes.PHONE_NUMBER.SUCCESS](state, { user }) {
    return state.set('user', user)
  },
  [actionTypes.PHONE_NUMBER.FAILURE](state, { error }) {
    return state.setIn(['user', 'error'], error)
  },
  [actionTypes.VALIDATE_DEVICE.SUCCESS](state, { user: { token } }) {
    return state.setIn(['user', 'token'], token)
  },
  [actionTypes.VALIDATE_DEVICE.FAILURE](state, { error }) {
    return state.setIn(['user', 'error'], error)
  },
  [actionTypes.GET_USER.SUCCESS](state, { user }) {
    return state.set('user', user)
  },
  [actionTypes.GET_USER.FAILURE](state, { message }) {
    return state.setIn(['user', 'error'], message)
  },
  [actionTypes.LOGOUT.SUCCESS]() {
    return $$initialState
  }
}

export default (state = $$initialState, action) => {
  const reduceFn = actionsMap[action.type]
  if (!reduceFn) return state
  return reduceFn(state, action)
}
