import React from 'react'
import msgDispatch from './msgDispatch'

export default function msgConnect(mapStateToProps, mapDispatchToProps) {
  // mapStateToProps
  // state => ({ module.props.key: value })

  // mapDispatchToProps
  // dispatch => ({ module.props.key: value })

  return function classDecorator(Target) {
    return class extends React.Component {
      static propTypes = {
        appState: React.PropTypes.object.isRequired
      }

      constructor(props) {
        super(props)
        if (!props.appState) {
          throw new Error('Component must have appState passed as prop')
        }
      }

      render() {
        return (
          <Target
            {...this.props}
            {...mapDispatchToProps(msgDispatch)}
            {...mapStateToProps(this.props.appState || {})}
          />
        )
      }
    }
  }
}
