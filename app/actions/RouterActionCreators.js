import { ROUTER as ActionTypes } from '../constants/ActionTypes'

export const push = path => // eslint-disable-line
  ({ type: ActionTypes.PUSH, path })
