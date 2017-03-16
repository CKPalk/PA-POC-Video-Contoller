

const getState = () =>
  new Promise(resolve => {
    chrome.storage.local.get('state', ({ state = '{}' }) => {
      resolve(JSON.parse(state))
    })
  })

const saveState = state =>
  new Promise((resolve, reject) => {
    chrome.storage.local.set({ state: JSON.stringify(state) }, () => {
      const { runtime: { lastError } } = chrome
      if (lastError) reject(lastError)
      else resolve(state)
    })
  })


export default {
  getState,
  saveState,
  onStateChange: fn => chrome.storage.onChanged.addListener(fn)
}
