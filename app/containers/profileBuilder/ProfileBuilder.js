import React, { PropTypes } from 'react'
import classname from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _Packery from 'react-packery-component'
import * as RouterActionCreators from '../../actions/routerActionCreators'
import URIS from '../../constants/routeUris'

import './profileBuilder.styl'

const Packery = _Packery(React)

@connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(RouterActionCreators, dispatch) })
)
export default class ProfileBuilder extends React.Component {

  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      activeAvatar: null,
      avatars: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    }
  }

  onAvatarClick = avatar => {
    this.setState({
      activeAvatar: !this.isActiveAvatar(avatar) ? avatar : null
    })
  }

  onNext = e => {
    e.preventDefault()
    e.stopPropagation()
    this.props.actions.push(URIS.SIGNIN.SETTINGS.path)
  }

  submitProfileBuilderForm = e => {
    e.preventDefault()
    // this.props.actions.push(URIS.SIGNIN.SETTINGS.path)
  }

  isActiveAvatar = avatar => {
    const { activeAvatar } = this.state
    return avatar === activeAvatar
  }

  render() {
    return (
      <div key='profile-builder' className='profileBuilder'>
        <form className='profileBuilder__form'>
          <fieldset>
            <legend>
              <span className='number'>2</span>Profile Builder
              <input
                className='skip'
                onClick={this.onNext}
                type='button'
                value={this.state.activeAvatar ? 'next' : 'skip'}
              />
            </legend>
            <Packery
              className='profileBuilder__avatars'
              options={{ gutter: 10 }}
            >
              { this.state.avatars.map(avatar =>
                <div
                  key={avatar}
                  className={classname('avatar', { 'avatar--active': this.isActiveAvatar(avatar) })}
                  onClick={() => this.onAvatarClick(avatar)}
                />
              )}
            </Packery>
          </fieldset>
        </form>
      </div>
    )
  }
}
