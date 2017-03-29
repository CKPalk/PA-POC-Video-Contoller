import React, { PropTypes, Component } from 'react'
import { APP_LOGOS } from '../../constants/assetUrls'
import { AnimatedAccept, AnimatedReject } from '../animatedButtons'
import AdRatings from '../../constants/AdRatings'
import './videoForm.styl'

export default class VideoForm extends Component {

  static propTypes = {
    onLogoClick: PropTypes.func.isRequired,
    showForm: PropTypes.bool.isRequired,
    onRating: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      hasSelected: false,
      selectedAccept: false,
      selectedReject: false
    }
  }

  onAccept = () => {
    const { selectedAccept, selectedReject } = this.state
    this.setState({
      selectedAccept: !selectedAccept,
      hasSelected: !selectedAccept || selectedReject
    })
    const { onRating } = this.props
    onRating(AdRatings.highest)
  }

  onReject = () => {
    const { selectedAccept, selectedReject } = this.state
    this.setState({
      selectedReject: !selectedReject,
      hasSelected: !selectedReject || selectedAccept
    })
    const { onRating } = this.props
    onRating(AdRatings.lowest)
  }

  render() {
    const { showForm } = this.props
    const {
      hasSelected,
      selectedAccept,
      selectedReject
    } = this.state

    return (
      <div className={`videoForm ${showForm ? 'videoForm--open' : 'videoForm--closed'}`}>
        <div
          className='videoForm__logo'
          style={{ backgroundImage: APP_LOGOS.light }}
          onClick={this.props.onLogoClick}
        />
        <div className='videoForm__content'>
          <AnimatedAccept
            hidden={hasSelected && !selectedAccept}
            text={selectedAccept ? 'Got it!' : 'Like'}
            height={30}
            onClick={this.onAccept}
          />
          <AnimatedReject
            hidden={hasSelected && !selectedReject}
            text={selectedReject ? 'No problem!' : 'Snooze'}
            height={30}
            onClick={this.onReject}
          />
        </div>
      </div>
    )
  }
}
