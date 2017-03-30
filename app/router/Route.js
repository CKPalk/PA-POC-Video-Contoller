import React, { PropTypes } from 'react'
import Router from './Router'

export default class Route extends React.Component {

  static propTypes = {
    children: PropTypes.array,
    component: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired
  }

  render() {
    const { children, component, path, destination } = this.props
    const child = Router.getMatchingChild(path, destination, children)
    return (component ? React.createElement(component, null, child) : child)
  }
}
