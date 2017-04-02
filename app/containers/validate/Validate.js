import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserActionCreators from '../../actions/userActionCreators'
import { classNameWithModifiers as cn } from '../../utils/helpers'
import FormError from '../../components/formError/FormError'
import './validate.styl'

@connect(
  state => ({
    user: state.$$userState.get('user'),
    phoneNumber: state.$$userState.getIn(['user', 'phoneNumber'])
  }),
  dispatch => ({
    actions: bindActionCreators({
      ...UserActionCreators
    }, dispatch)
  })
)
export default class Validate extends React.Component {

  static propTypes = {
    phoneNumber: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      returningUser: false,
      form: {}
    }
  }

  submitValidateForm = e => {
    e.preventDefault()
    const { phoneNumber, actions: { postValidateDevice } } = this.props
    const { fields } = this.state
    postValidateDevice({ ...fields, phoneNumber })
  }

  recordForm = e => {
    this.setState({
      form: { ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    const {
      user: { error }
    } = this.props

    const inputErrorClassName = cn('form-input', { '-error': !!error })

    return (
      <div className='validate'>
        <form className='validate__form' autoComplete='off' onSubmit={this.submitValidateForm}>
          <fieldset>
            <legend>
              <span className='number'>2</span>
              Check Your Phone
            </legend>
            <FormError />
            <input
              className={inputErrorClassName}
              type='tel'
              name='validationCode'
              onChange={this.recordForm}
              placeholder='SMS Validation Code'
            />
            <input type='submit' value='Submit' />
          </fieldset>
        </form>
      </div>
    )
  }
}
