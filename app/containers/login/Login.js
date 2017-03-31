import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserActionCreators from '../../actions/userActionCreators'
import * as RouterActionCreators from '../../actions/routerActionCreators'
import { classNameWithModifiers as cn } from '../../utils/helpers'
import FormError from '../../components/formError/FormError'
import './login.styl'

@connect(
  state => state,
  dispatch => ({ actions: bindActionCreators({
    ...UserActionCreators,
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
      returningUser: false,
      form: {}
    }
  }

  submitLoginForm = e => {
    e.preventDefault()
    const { actions: { postSignup } } = this.props
    const { form } = this.state
    postSignup(form)
  }

  recordForm = e => {
    this.setState({
      form: { ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  showRegister = () => {
    if (this.state.returningUser)
      this.setState({ returningUser: false })
  }

  showLogin = () => {
    if (!this.state.returningUser)
      this.setState({ returningUser: true })
  }

  render() {
    const { returningUser } = this.state

    const signUpClassName = cn('login__controls', { '--active': !returningUser })
    const signInClassName = cn('login__controls', { '--active': returningUser })
    const underlineClassName = `login__controls__underline ${returningUser ? 'login' : 'register'}`
    const firstNameClassName = cn('form-input', { '-inactive': returningUser })

    return (
      <div className='login'>
        <form autoComplete='off' onSubmit={this.submitLoginForm} className='login__form'>
          <fieldset>
            <legend>
              <span className='number'>1</span>
              <a onClick={this.showRegister} className={signUpClassName}>Sign Up</a>
              <a onClick={this.showLogin} className={signInClassName}>Sign In</a>
              <div className={underlineClassName} />
            </legend>
            <FormError />
            <input
              name='firstName'
              type='text'
              className={firstNameClassName}
              onChange={this.recordForm}
              placeholder='First Name'
            />
            <input
              name='phoneNumber'
              type='tel'
              className='form-input'
              onChange={this.recordForm}
              placeholder='Phone Number'
            />
            <input type='submit' value={returningUser ? 'Login' : 'Submit'} />
          </fieldset>
        </form>
      </div>
    )
  }
}
