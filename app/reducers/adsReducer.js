import Immutable from 'immutable'
// import actionTypes from '../actionTypes/adsActionTypes'

const initialState = Immutable.fromJS({
  ads: []
})

const actionsMap = {
  // [actionTypes.SET_THUMBNAIL](state, { id, imageData }) {
  //   return updateAdWithId(state, id, ad => ({ ...ad, imageData }))
  // },
  // [actionTypes.SET_RATING](state, { id, rating }) {
  //   return updateAdWithId(state, id, ad => ({ ...ad, rating }))
  // }
}

// function updateAdWithId(ads, id, cb) {
//   const adIndex = ads.findIndex(ad => ad.id === id)
//   return (adIndex !== -1) ?
//     [...ads.slice(0, adIndex), cb(ads[adIndex]), ...ads.slice(adIndex + 1)] :
//     [...ads, cb({ id })]
// }

export default (state = initialState, action) => {
  const reduceFn = actionsMap[action.type]
  if (!reduceFn) return state
  return reduceFn(state, action)
}
