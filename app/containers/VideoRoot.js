import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import Overlay from './Overlay'

export default class VideoRoot extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
    video: PropTypes.object.isRequired
  }

  render() {
    const { store, video } = this.props

    return (
      <Provider store={store}>
        <Overlay video={video} />
      </Provider>
    )
  }
}
