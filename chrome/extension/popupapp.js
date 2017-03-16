import React from 'react'
import ReactDOM from 'react-dom'
import PopupRoot from '../../app/containers/PopupRoot'
import './popupapp.css'

import { getState } from '../../app/utils/localStorage'
import createStore from '../../app/store/configureStore'

getState()
  .then(createStore)
  .then(store => {
    ReactDOM.render(
      <PopupRoot store={store} />,
      document.querySelector('#root')
    )
  })
