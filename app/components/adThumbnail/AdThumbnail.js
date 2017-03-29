import React, { PropTypes } from 'react'
import { AnimatedAccept, AnimatedReject } from '../animatedButtons'
import AdRatings from '../../constants/AdRatings'
import AssetUrls from '../../constants/assetUrls'
import './adThumbnail.styl'

export default class AdThumbnail extends React.Component {

  static propTypes = {
    ad: PropTypes.object.isRequired,
    onRating: PropTypes.func.isRequired
  }

  onPositiveRating = () => {
    const { ad: { id }, onRating } = this.props
    onRating(id, AdRatings.positive)
  }

  onNegativeRating = () => {
    const { ad: { id }, onRating } = this.props
    onRating(id, AdRatings.negative)
  }

  render() {
    const { ad } = this.props

    const imgStyle = {
      backgroundImage: AssetUrls.logos.youtube
    }

    return (
      <div className='adThumbnail'>
        <img role='presentation' src={ad.imageData} style={imgStyle} />
        <div className='adThumbnail__controls'>
          <AnimatedAccept
            text={'Like'}
            height={30}
            onClick={this.onPositiveRating}
          />
          <AnimatedReject
            text={'Snooze'}
            height={30}
            onClick={this.onNegativeRating}
          />
        </div>
      </div>
    )
  }
}
