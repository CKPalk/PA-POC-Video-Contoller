import React, { PropTypes } from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace'
import './animatedText.styl'


export default class AnimatedText extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired
  }

  render() {
    const { text } = this.props
    return (
      <ReactCSSTransitionReplace
        transitionName='fade-wait'
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={400}
      >
        <span key={text}>{text}</span>
      </ReactCSSTransitionReplace>
    )
  }
}
