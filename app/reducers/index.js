import { combineReducers } from 'redux'
import adsReducer from './adsReducer'
import accountReducer from './accountReducer'
import routerReducer from './routerReducer'

export default combineReducers({
  $$adsState: adsReducer,
  $$accountState: accountReducer,
  $$routerState: routerReducer
})
