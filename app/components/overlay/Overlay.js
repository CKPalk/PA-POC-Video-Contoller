import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import * as AdActionCreators from '../../actions/AdActionCreators'
import VideoForm from '../../components/videoForm/VideoForm'
import msgConnect from '../../utils/msgConnect'
import style from './overlay.styl'


@msgConnect(
  () => ({}),
  dispatch => ({ actions: bindActionCreators(AdActionCreators, dispatch) })
)
export default class Overlay extends Component { // eslint-disable-line

  static propTypes = {
    video: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    adID: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      showingFeedbackForm: false
    }
  }

  componentDidMount() {
    setTimeout(this.saveScreenshot, 500)
  }

  onFormClick = () => {
    this.setState({ showingFeedbackForm: !this.state.showingFeedbackForm })
  }

  onRating = rating => {
    const { adID, actions } = this.props
    actions.setAdRating(adID, rating)
  }

  getVideoScreenshot = () => {
    const { video } = this.props
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    const width = video.scrollWidth || video.clientWidth || 480
    const height = video.scrollHeight || video.clientHeight || 360

    canvas.width = width
    canvas.height = height
    context.drawImage(video, 0, 0, width, height)

    return canvas.toDataURL()
  }

  saveScreenshot = () => {
    try {
      const screenshotData = this.getVideoScreenshot()
      const { adID, actions } = this.props
      actions.setAdThumbnail(adID, screenshotData)
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { video } = this.props
    const { showingFeedbackForm } = this.state

    const overlayStyle = {
      width: video.offsetWidth,
      height: video.offsetHeight
    }

    return (
      <div className={style.overlay} style={overlayStyle}>
        <VideoForm
          showForm={showingFeedbackForm}
          onLogoClick={this.onFormClick}
          onRating={this.onRating}
        />
      </div>
    )
  }
}
