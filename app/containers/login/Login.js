import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AccountActionCreators from '../../actions/AccountActionCreators'
import * as RouterActionCreators from '../../actions/RouterActionCreators'
import './login.styl'

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

  login = () => {
    const { actions } = this.props
    actions.accountLogin()
    actions.push('/history')
  }

  submitLoginForm = e => {
    e.preventDefault()
    const { actions: { push } } = this.props
    push('/history')
  }

  render() {
    return (
      <div className='login'>
        <form onSubmit={this.submitLoginForm}>
          <fieldset>
            <legend><span className='number'>1</span>Sign Up</legend>
            <input type='text' name='firstName' placeholder='First Name' />
            <input type='tel' name='phoneNumber' placeholder='Phone Number' />
            <input type='submit' value='Submit' />
          </fieldset>
        </form>
      </div>
    )
  }
}
