import { isUnrated } from '../constants/AdRatings'

export default function setBadge(state) {
  const unratedAdCount = state.$$adsState.filter(isUnrated).length
  if (chrome.browserAction) {
    const text = unratedAdCount > 0 ? unratedAdCount.toString() : ''
    chrome.browserAction.setBadgeText({ text })
  }
}
