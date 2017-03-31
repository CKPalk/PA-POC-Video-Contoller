import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import * as UserActionCreators from '../../actions/userActionCreators'
import style from './History.css'

@connect(
  state => ({ ads: state.$$adsState }),
  dispatch => ({ actions: bindActionCreators({
    ...UserActionCreators
  }, dispatch) })
)
export default class History extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  logout = () => {
    const { actions } = this.props
    actions.logout()
  }

  render() {
    return (
      <div className={style.normal}>
        <a onClick={this.logout} style={{ width: 100, height: 50 }}>
          logout
        </a>
        <Header />
        <MainSection />
      </div>
    )
  }
}
