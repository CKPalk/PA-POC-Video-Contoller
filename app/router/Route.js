import React, { PropTypes } from 'react'

export default class Route extends React.Component {

  static propTypes = {
    children: PropTypes.array,
    component: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired
  }

  render() {
    const { children, component } = this.props
    const child = children ? children[0] : null
    return (component ? React.createElement(component, null, child) : child)
  }
}
