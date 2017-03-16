import { saveState } from './localStorage'

// todos unmarked count
export function setBadge(state) {
  const { todos } = state
  if (chrome.browserAction) {
    const count = todos.filter(todo => !todo.marked).length
    chrome.browserAction.setBadgeText({ text: count > 0 ? count.toString() : '' })
  }
}

export default function () {
  return next => (reducer, initialState) => {
    const store = next(reducer, initialState)
    store.subscribe(() => {
      const state = store.getState()
      saveState(state)
      setBadge(state)
    })
    return store
  }
}
