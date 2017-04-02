import React, { PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './signinLayout.styl'
import './signinLayoutTransition.styl'

export default class SigninLayout extends React.Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        className='signinLayout'
        component='div'
        transitionName='signin-layout-transition'
        transitionEnter
        transitionLeave
        transitionEnterTimeout={800}
        transitionLeaveTimeout={800}
      >
        {this.props.children}
      </ReactCSSTransitionGroup>
    )
  }
}
