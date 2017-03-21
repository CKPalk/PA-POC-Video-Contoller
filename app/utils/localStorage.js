import rootReducer from '../reducers'
import setBadge from './setBadge'

export function getState() {
  return new Promise(resolve => {
    chrome.storage.local.get('state', ({ state = '{}' }) => {
      resolve(JSON.parse(state))
    })
  })
}

export function saveState(state) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({ state: JSON.stringify(state) }, () => {
      const { runtime: { lastError } } = chrome
      if (lastError) reject(lastError)
      else resolve(state)
    })
  })
}

const onStateChange = fn =>
  chrome.storage.onChanged.addListener(fn)


export function reduceStateWithAction(action) {
  console.log('Got action', action, 'in reduer')
  return getState()
    .then(state => rootReducer(state, action))
    .then(saveState)
    .then(setBadge)
}

export { onStateChange }
