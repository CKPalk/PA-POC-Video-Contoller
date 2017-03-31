import Immutable from 'immutable'
import rootReducer from '../reducers'
import setBadge from './setBadge'

export const getState = () =>
  new Promise(resolve => {
    chrome.storage.local.get('state', ({ state = '{}' }) => {
      const cleanedState = Object.keys(state)
        .reduce((res = {}, key) => ({ ...res, [key]: Immutable.fromJS(state[key]) }))
      resolve(cleanedState)
    })
  })

export const saveState = state =>
  new Promise((resolve, reject) => {
    const cleanedState = Object.keys(state)
      .reduce((res = {}, key) =>
        ({ ...res, [key]: Immutable.isImmutable(state[key]) ? state[key].toJS() : state[key] })
      )
    chrome.storage.local.set({ state: cleanedState }, () => {
      const { runtime: { lastError } } = chrome
      if (lastError) reject(lastError)
      else resolve(state)
    })
  })

export const onStateChange = fn =>
  chrome.storage.onChanged.addListener(fn)

export const reduceStateWithAction = action =>
  getState()
    .then(state => rootReducer(state, action))
    .then(saveState)
    .then(setBadge)
