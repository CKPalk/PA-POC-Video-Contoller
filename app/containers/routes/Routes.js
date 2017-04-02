import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Router, Route } from '../../router'
import { AppLayout, SigninLayout } from '../../layouts'
import {
  Login,
  Validate,
  History,
  Settings,
  ProfileBuilder
} from '..'

@connect(
  state => ({ authenticated: !!state.$$userState.getIn(['user', 'token'], null) }),
  () => ({})
)
export default class Routes extends React.Component {

  static propTypes = {
    authenticated: PropTypes.bool.isRequired
  }

  render() {
    return (
      <Router>
        <Route path='/' component={AppLayout}>
          <Route path='signin' component={SigninLayout}>
            <Route path='login' component={Login} />
            <Route path='validate' component={Validate} />
            <Route path='profileBuilder' component={ProfileBuilder} />
            <Route path='settings' component={Settings} />
          </Route>
          <Route path='history' component={History} />
        </Route>
      </Router>
    )
  }
}
