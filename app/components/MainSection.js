import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AdActionCreators from '../actions/AdActionCreators'
import AdCategory from './adCategory/AdCategory'
import {
  default as AdRatings,
  isPositiveRating,
  isUnrated,
  isNegativeRating
} from '../constants/AdRatings'

@connect(
  state => ({ ads: state.$$adsState }),
  dispatch => ({ actions: bindActionCreators(AdActionCreators, dispatch) })
)
export default class MainSection extends React.Component {

  static propTypes = {
    ads: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  onAdRating = (id, rating) => {
    const { actions } = this.props
    actions.setAdRating(id, rating)
  }

  render() {
    const { ads } = this.props

    const positiveAds = ads.filter(isPositiveRating)
    const unratedAds = ads.filter(isUnrated)
    const negativeAds = ads.filter(isNegativeRating)

    return (
      <section>
        <div className='ads__liked'>
          <AdCategory category={AdRatings.positive} ads={positiveAds} onRating={this.onAdRating} />
        </div>
        <div className='ads__unrated'>
          <AdCategory category={AdRatings.unrated} ads={unratedAds} onRating={this.onAdRating} />
        </div>
        <div className='ads__snoozed'>
          <AdCategory category={AdRatings.negative} ads={negativeAds} onRating={this.onAdRating} />
        </div>
      </section>
    )
  }
}
