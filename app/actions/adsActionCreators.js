import actionTypes from '../actionTypes/adsActionTypes'

export const setAdThumbnail = (id, imageData) =>
  ({ type: actionTypes.SET_THUMBNAIL, id, imageData })

export const setAdRating = (id, rating) =>
  ({ type: actionTypes.SET_RATING, id, rating })
