import { DISPATCH_MESSAGE_TYPE } from '../../../app/utils/msgDispatch'
import { reduceStateWithAction } from '../../../app/utils/localStorage'

chrome.runtime.onMessage.addListener(({ type, action }) => {
  if (type === DISPATCH_MESSAGE_TYPE) {
    reduceStateWithAction(action)
  }
})

// Custom @@INIT for our message reducer
reduceStateWithAction({ type: '@@INIT/THIS_APP' })
