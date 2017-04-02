import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as RouterActionCreators from '../../actions/routerActionCreators'
import URIS from '../../constants/routeUris'
import './settings.styl'

@connect(
  state => ({ state }),
  dispatch => ({ actions: bindActionCreators(RouterActionCreators, dispatch) })
)
export default class Settings extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  onSkip = e => {
    e.preventDefault()
    e.stopPropagation()
    const { actions } = this.props
    actions.push(URIS.HISTORY.path)
  }

  render() {
    return (
      <div key='settings' className='settings'>
        <form onSubmit={this.submitSettingsForm} className='login__form'>
          <fieldset>
            <legend>
              <span className='number'>3</span>Settings
              <input className='skip' onClick={this.onSkip} type='button' value='next' />
            </legend>
            Other stuff
          </fieldset>
        </form>
      </div>
    )
  }
}
