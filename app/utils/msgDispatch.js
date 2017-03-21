/**
 * injectedDispatch.js
 */

/**
 * Identifier of our custom action types as messages are sent to runtime.
 * @type  {String}
 */
export const DISPATCH_MESSAGE_TYPE = 'DISPATCHED_ACTION'

/**
 * This dispatch function is to be used by injected pages which do not have
 * direct access to the global store. Our psuedo-dispatched Actions will instead
 * utilize chromes message passing to eventually be handled by our reducers and
 * update our single store.
 * @param   {Object}  action  Standard React action
 */
export default function msgDispatch(action) {
  chrome.runtime.sendMessage({
    type: DISPATCH_MESSAGE_TYPE,
    action
  })
}
