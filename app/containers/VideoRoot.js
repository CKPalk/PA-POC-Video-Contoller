import React, { PropTypes } from 'react'
import Overlay from '../components/overlay/Overlay'

import '../global.styl'

export default class VideoRoot extends React.Component {

  static propTypes = {
    appState: PropTypes.object.isRequired,
    video: PropTypes.object.isRequired,
    adID: PropTypes.string.isRequired
  }

  render() {
    const { appState, video, adID } = this.props
    return (
      <div className='videoRoot'>
        <Overlay appState={appState} video={video} adID={adID} />
      </div>
    )
  }
}
