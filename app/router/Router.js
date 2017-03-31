import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { trimCharacter } from '../utils/helpers'

@connect(
  state => ({ destination: state.$$routerState.get('path') }),
  () => ({})
)
export default class Router extends React.Component {

  static propTypes = {
    destination: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
  }

  static childMatchingDestination = destination => child => {
    const { path: childsPath } = child.props
    const nextDestination = trimCharacter(destination, '/')
    const nextChildsPath = childsPath.split('/').join('')
    return nextDestination.match(new RegExp(`^${nextChildsPath}`))
  }

  static nextDestination = (currentPath = '', destination) =>
    destination.slice(
      destination.search(new RegExp(currentPath)) + currentPath.length
    )

  static mapDestinationToChildren = (destination, children) =>
    React.Children.map(children,
      child => React.cloneElement(child, { destination })
    )

  static findChildMatchingDestination = (children, destination) =>
    children.find(Router.childMatchingDestination(destination))

  static getMatchingChild = (currentPath, destination, children) => {
    const newDestination = Router.nextDestination(currentPath, destination)
    const childrenWithProps = Router.mapDestinationToChildren(newDestination, children)
    if (!childrenWithProps) return null
    const result = Router.findChildMatchingDestination(childrenWithProps, newDestination)
    return result
  }

  render() {
    const { path, destination, children } = this.props
    return Router.getMatchingChild(path, destination, children)
  }
}
