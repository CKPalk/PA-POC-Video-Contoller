import { AD as ActionTypes } from '../constants/ActionTypes'

export const setAdThumbnail = (id, imageData) =>
  ({ type: ActionTypes.SET_THUMBNAIL, id, imageData })

export const setAdRating = (id, rating) =>
  ({ type: ActionTypes.SET_RATING, id, rating })
