import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

@connect(
  state => ({
    message: state.$$userState.getIn(['user', 'error', 'message'])
  })
)
export default class FormError extends React.Component {
  static propTypes = {
    message: PropTypes.string,
    onErrorHandler: PropTypes.func
  }

  render() {
    const { message, onErrorHandler } = this.props
    return !message ? null : (
      <div className='form-error'>
        { message }
        { onErrorHandler && <a onClick={onErrorHandler}>Start Over</a> }
      </div>
    )
  }
}
