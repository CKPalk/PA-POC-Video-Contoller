import React, { PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './appLayout.styl'
import './appLayoutTransition.styl'

export default class AppLayout extends React.Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        className='app-layout'
        transitionName='app-layout-transition'
        transitionAppear
        transitionEnter
        transitionLeave
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {this.props.children}
      </ReactCSSTransitionGroup>
    )
  }
}
