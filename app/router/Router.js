import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

@connect(
  state => ({ destination: state.$$routerState.path }),
  () => ({})
)
export default class Router extends React.Component {

  static propTypes = {
    destination: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
  }

  childMatchesDestination = child => {
    const { destination, path } = this.props
    const { path: childsPath } = child.props
    return destination.match(new RegExp(`${path}${childsPath}`))
  }

  render() {
    const { children } = this.props
    return children.find(this.childMatchesDestination)
  }
}
