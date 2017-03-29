import React, { PropTypes } from 'react'
import classnames from 'classnames'
import AdRatings from '../../constants/AdRatings'
import AdThumbnail from '../adThumbnail/AdThumbnail'
import './adCategory.styl'

export default class AdCategory extends React.Component {

  static propTypes = {
    category: PropTypes.string.isRequired,
    ads: PropTypes.array.isRequired,
    onRating: PropTypes.func.isRequired
  }

  appendCategoryModifier = className => {
    const { category } = this.props
    switch (category) {
      case AdRatings.positive: return `${className}--positive`
      case AdRatings.negative: return `${className}--negative`
      case AdRatings.unrated: return `${className}--unrated`
      default: return null
    }
  }

  render() {
    const { ads, onRating } = this.props

    return (
      <div className={classnames('adCategory', this.appendCategoryModifier('adCategory'))}>
        { ads.map(ad =>
          <AdThumbnail key={ad.id} {...{ ad, onRating }} />
        )}
      </div>
    )
  }
}
