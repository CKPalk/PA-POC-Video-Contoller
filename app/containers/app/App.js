import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Router, Route } from '../../router'
import Login from '../login/Login'
import History from '../history/History'

@connect(
  state => ({ authenticated: state.$$accountState.authenticated }),
  () => ({})
)
export default class App extends React.Component {

  static propTypes = {
    authenticated: PropTypes.bool.isRequired
  }

  render() {
    return (
      <Router path='/'>
        <Route path='login' component={Login} />
        <Route path='history' component={History} />
      </Router>
    )
  }
}
