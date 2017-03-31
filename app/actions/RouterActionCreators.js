import actionTypes from '../actionTypes/routerActionTypes'

export const push = path => // eslint-disable-line import/prefer-default-export
  ({ type: actionTypes.PUSH, path })
