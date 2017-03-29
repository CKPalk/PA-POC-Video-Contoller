import { ROUTER as ActionTypes } from '../constants/ActionTypes'
import ROUTES from '../constants/routes'

const initialState = {
  path: ROUTES.LOGIN
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
