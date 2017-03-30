import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import Routes from './routes/Routes'
import '../global.styl'

const PopupRoot = ({ store }) =>
  <Provider store={store}>
    <Routes />
  </Provider>

PopupRoot.propTypes = {
  store: PropTypes.object.isRequired
}

export default PopupRoot
