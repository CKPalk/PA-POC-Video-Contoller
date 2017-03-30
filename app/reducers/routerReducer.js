import { ROUTER as ActionTypes } from '../constants/ActionTypes'
import URIS from '../constants/routeUris'

const initialState = {
  path: URIS.SIGNIN.LOGIN.path
}

const actionsMap = {
  [ActionTypes.PUSH](state, { path }) {
    return { ...state, path }
  }
}

export default (state = initialState, action) => {
  const reduceFn = actionsMap[action.type]
  if (!reduceFn) return state
  return reduceFn(state, action)
}
