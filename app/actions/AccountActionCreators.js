import { ACCOUNT as ActionTypes } from '../constants/ActionTypes'
import routes from '../constants/routes'
import { push } from './RouterActionCreators'

//--- ACCOUNT LOGIN ----------------------------------------------------------//
const accountLoginBefore = () => ({ type: ActionTypes.LOGIN.BEFORE })
const accountLoginSuccess = () => ({ type: ActionTypes.LOGIN.SUCCESS })
const accountLoginFailure = () => ({ type: ActionTypes.LOGIN.FAILURE })

export function accountLogin() {
  return dispatch => {
    dispatch(accountLoginBefore())

    const successful = true
    if (successful) {
      dispatch(accountLoginSuccess())
    } else {
      dispatch(accountLoginFailure())
    }
  }
}

//--- ACCOUNT LOGOUT ---------------------------------------------------------//

const accountLogoutBefore = () => ({ type: ActionTypes.LOGOUT.BEFORE })
const accountLogoutSuccess = () => ({ type: ActionTypes.LOGOUT.SUCCESS })
const accountLogoutFailure = () => ({ type: ActionTypes.LOGOUT.FAILURE })

export function accountLogout() {
  return dispatch => {
    dispatch(accountLogoutBefore())

    const successful = true
    if (successful) {
      dispatch(accountLogoutSuccess())
      dispatch(push(routes.LOGIN))
    } else {
      dispatch(accountLogoutFailure())
    }
  }
}
