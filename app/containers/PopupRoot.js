import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import App from './app/App'
import '../global.styl'

const PopupRoot = ({ store }) =>
  <Provider store={store}>
    <App />
  </Provider>

PopupRoot.propTypes = {
  store: PropTypes.object.isRequired
}

export default PopupRoot
