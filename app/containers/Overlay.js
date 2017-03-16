import React, { PropTypes, Component } from 'react'
import AdNotification from '../components/adNotification/AdNotification'
import style from './Overlay.css'


export default class Overlay extends Component {

  static propTypes = {
    appState: PropTypes.object.isRequired,
    video: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      showFeedbackForm: false,
      showNotification: true
    }
  }

  onNotificationClick = () => {
    this.setState({ showFeedbackForm: !this.state.showFeedbackForm })
  }

  render() {
    const { video } = this.props

    const overlayStyle = {
      width: video.offsetWidth,
      height: video.offsetHeight
    }

    return (
      <div className={style.overlay} style={overlayStyle}>

        { this.state.showFeedbackForm &&
          <div>Form here</div>
        }

        { this.state.showNotification &&
          <AdNotification
            onClick={this.onNotificationClick}
            notificationCount={this.props.appState.todos.length}
          />
        }

      </div>
    )
  }
}
