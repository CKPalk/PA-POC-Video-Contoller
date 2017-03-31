import { combineReducers } from 'redux'
import adsReducer from './adsReducer'
import userReducer from './userReducer'
import routerReducer from './routerReducer'

export default combineReducers({
  $$adsState: adsReducer,
  $$userState: userReducer,
  $$routerState: routerReducer
})
