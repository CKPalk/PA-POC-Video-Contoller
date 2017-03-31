// import { ACCOUNT as ActionTypes } from '../constants/ActionTypes'
//
// const initialState = {
//   authenticating: false,
//   authenticated: false
// }
//
// const actionsMap = {
//
//   [ActionTypes.LOGIN.BEFORE](state) {
//     return { ...state, authenticating: true, authenticated: false }
//   },
//   [ActionTypes.LOGIN.SUCCESS](state) {
//     return { ...state, authenticating: false, authenticated: true }
//   },
//   [ActionTypes.LOGIN.FAILURE](state) { /* TODO: Add error with action */
//     return { ...state, authenticating: false, authenticated: false }
//   },
//
//   [ActionTypes.LOGOUT.SUCCESS](state) {
//     return { ...state, authenticating: false, authenticated: false }
//   }
// }
//
// export default (state = initialState, action) => {
//   const reduceFn = actionsMap[action.type]
//   if (!reduceFn) return state
//   return reduceFn(state, action)
// }
