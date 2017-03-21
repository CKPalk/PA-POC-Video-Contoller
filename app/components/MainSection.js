import React, { PropTypes } from 'react'
import AdCategory from './adCategory/AdCategory'


export default class MainSection extends React.Component {

  static propTypes = {
    ads: PropTypes.array.isRequired
  };

  render() {
    const { ads } = this.props

    return (
      <section>
        <div className='ads__liked'>
          <AdCategory ads={ads} />
        </div>
        <div className='ads__unrated'>
          <AdCategory ads={ads} />
        </div>
        <div className='ads__snoozed'>
          <AdCategory ads={ads} />
        </div>
      </section>
    )
  }
}
