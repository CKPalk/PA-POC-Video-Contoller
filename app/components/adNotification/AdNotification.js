import React, { PropTypes, Component } from 'react'
import msgDispatch from '../../utils/msgDispatch'
import style from './adNotification.css'

export default class AdNotification extends Component {

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    notificationCount: PropTypes.number.isRequired
  }

  buttonOnClick = () => {
    console.log('!!!CLICKED!!!')
    msgDispatch({ type: 'ADD_TODO', text: 'DAT MULLA $$' })
    this.props.onClick()
  }

  render() {
    return (
      <div className={style.adNotification} onClick={this.buttonOnClick}>
        <div className={style.adNotification__logo} style={{ backgroundImage: `url(${chrome.extension.getURL('img/logo-dark.png')})` }} />
        <span>{`Notifications: ${this.props.notificationCount || -1}`}</span>
      </div>
    )
  }
}
