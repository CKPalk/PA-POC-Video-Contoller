import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import classname from 'classnames'
import * as AccountActionCreators from '../../actions/AccountActionCreators'
import * as RouterActionCreators from '../../actions/RouterActionCreators'
import URIS from '../../constants/routeUris'
import './login.styl'
import './loginTransition.styl'

@connect(
  state => state,
  dispatch => ({ actions: bindActionCreators({
    ...AccountActionCreators,
    ...RouterActionCreators
  }, dispatch) })
)
export default class Login extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      isRegister: true
    }
  }

  login = () => {
    const { actions } = this.props
    actions.accountLogin()
    actions.push(URIS.HISTORY.path)
  }

  submitLoginForm = e => {
    e.preventDefault()
    const { actions: { push } } = this.props
    const { isRegister } = this.state
    push(isRegister ? URIS.SIGNIN.PROFILE_BUILDER.path : URIS.HISTORY.path)
  }

  showRegister = () => {
    if (!this.state.isRegister) {
      this.setState({ isRegister: true })
    }
  }

  showLogin = () => {
    if (this.state.isRegister) {
      this.setState({ isRegister: false })
    }
  }

  render() {
    const { isRegister } = this.state

    return (
      <div key='login' className='login'>
        <form onSubmit={this.submitLoginForm} className='login__form'>
          <fieldset>
            <legend>
              <span className='number'>1</span>
              <a
                onClick={this.showRegister}
                className={classname('login__form__controls', { 'login__form__controls--active': isRegister })}
              >
                Sign Up
              </a>
              <a
                onClick={this.showLogin}
                className={classname('login__form__controls', { 'login__form__controls--active': !isRegister })}
              >
                Sign In
              </a>
              <div className={classname('login__form__controls__underline', isRegister ? 'register' : 'login')} />
            </legend>
            <ReactCSSTransitionGroup
              transitionName='login-form-transition'
              transitionEnter
              transitionLeave
              transitionEnterTimeout={400}
              transitionLeaveTimeout={400}
            >
              { isRegister && <input key='firstName' type='text' name='firstName' placeholder='First Name' /> }
              <input key='phoneNumber' type='tel' name='phoneNumber' placeholder='Phone Number' />
              <input key='submit' type='submit' value={isRegister ? 'Submit' : 'Login'} />
            </ReactCSSTransitionGroup>
          </fieldset>
        </form>
      </div>
    )
  }
}
