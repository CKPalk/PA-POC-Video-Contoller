import Immutable from 'immutable'
import actionTypes from '../actionTypes/routerActionTypes'
import URIS from '../constants/routeUris'

const initialState = Immutable.fromJS({
  path: URIS.SIGNIN.LOGIN.path
})

const actionsMap = {
  [actionTypes.PUSH](state, { path }) {
    return state.set('path', path)
  }
}

export default (state = initialState, action) => {
  const reduceFn = actionsMap[action.type]
  if (!reduceFn) return state
  return reduceFn(state, action)
}
