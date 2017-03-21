import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import MainSection from '../../components/MainSection'
import * as AdActionCreators from '../../actions/AdActionCreators'
import style from './App.css'

@connect(
  state => ({
    ads: state.ads
  }),
  dispatch => ({
    actions: bindActionCreators(AdActionCreators, dispatch)
  })
)
export default class App extends Component {

  static propTypes = {
    ads: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    const { ads, actions } = this.props

    return (
      <div className={style.normal}>
        <Header addTodo={actions.addTodo} />
        <MainSection ads={ads} actions={actions} />
      </div>
    )
  }
}
