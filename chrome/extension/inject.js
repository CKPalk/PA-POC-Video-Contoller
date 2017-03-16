import React from 'react'
import ReactDOM from 'react-dom'
import Overlay from '../../app/containers/Overlay'

import { getState, onStateChange } from '../../app/utils/localStorage'


/**
 * Whether this youtube video is currently an advertisement.
 * @param   {Object}  video  A HTML5 video element
 * @return  {Boolean}        Whether the user is watching an ad
 */
function videoIsAd(video) {
  return !!video
}

// function compose(...fns) {
//   return passed => fns.reduce((res, fn) => fn(res), passed)
// }


function findBestContainer(video) {
  const isGoodContainer = ({ offsetWidth, offsetHeight }) => (
    offsetWidth === video.offsetWidth &&
    offsetHeight === video.offsetHeight
  )

  let bestContainer = video.parentElement
  let container = video.parentElement
  while (container) {
    if (isGoodContainer(container)) {
      bestContainer = container
    }
    container = container.parentElement
  }
  return bestContainer
}

function renderOverlayForVideo(video) {
  const mount = document.createElement('div')
  mount.style.position = 'absolute'
  mount.style.top = 0
  mount.style.pointerEvents = 'none'
  findBestContainer(video).appendChild(mount)

  const renderOverlayWithCurrentState = () => {
    getState()
      .then(state => {
        ReactDOM.render(
          <Overlay
            appState={state}
            video={video}
          />,
          mount
        )
      })
  }

  renderOverlayWithCurrentState()
  // When the state changes, we render our overlay with the updated state
  onStateChange(renderOverlayWithCurrentState)
}

function handleVideo(video) {
  video.onloadstart = () => {
    handleVideo(video)
  }

  if (videoIsAd(video)) {
    renderOverlayForVideo(video)
  }
}

function locateAndHandleVideos() {
  const allVideos = Array(...document.getElementsByTagName('video'))

  if (allVideos.length === 0) {
    setTimeout(locateAndHandleVideos, 500)
    return
  }

  allVideos.forEach(video => {
    video.crossOrigin = 'anonymous'

    if (video.readyState === 4) {
      handleVideo(video)
    } else {
      video.onloadeddata = () => {
        video.onloadeddata = () => {}
        handleVideo(video)
      }
    }
  })
}

window.addEventListener('load', locateAndHandleVideos)
