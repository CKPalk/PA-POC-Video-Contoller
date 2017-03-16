import { DISPATCH_MESSAGE_TYPE } from '../../../app/utils/msgDispatch'
import rootReducer from '../../../app/reducers'

import { getState, saveState } from '../../../app/utils/localStorage'
import { setBadge } from '../../../app/utils/storage'

function reduceStateWithAction(action) {
  return getState()
    .then(state => rootReducer(state, action))
    .then(saveState)
    .then(setBadge)
}

chrome.runtime.onMessage.addListener(({ type, action }) => {
  if (type === DISPATCH_MESSAGE_TYPE) {
    reduceStateWithAction(action)
  }
})

// Custom @@INIT for our message reducer
reduceStateWithAction({ type: '@@INIT' })
