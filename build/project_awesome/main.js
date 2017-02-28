/** main.js.erb
 *  This script is run at the end of matched documents.
*/

/* TODO: Move these constants to the rb file **********************************/
const ATTEMPTS_TO_LOCATE_VIDEOS = 3
/******************************************************************************/

function noop() {}

const info = function() { console.info('PA:', ...arguments) }

function registerElements() {
  document.registerElement('project-awesome-overlay')
}

class ProjectAwesomeOverlay extends HTMLElement {
  constructor() {
    super()
  }
}

function handleVideo(video) {

  // Pause video at 0s
  info(video)
  video.currentTime = 0
  video.pause()

  const {
    offsetWidth:  video_width,
    offsetHeight: video_height
  } = video

  const container = video.parentElement
  const overlay = new ProjectAwesomeOverlay()
  const overlay_style = {
    position: 'absolute',
    width: `${video_width}px`,
    height: `${video_height}px`,
    'z-index': '1000',
    'background-color': 'red'
  }
  overlay.style = overlay_style

  container.insertBefore(overlay, video)
}


/**
 * Searches document for video elements, if there none it tries attempts
 * searching the document again after progressively long timeouts.
 * Any videos found are then processed.
*/
function main(attempts_left) {
  if (attempts_left === 0) return

  // Find all <video /> elements in the document
  const videos = Array(...document.getElementsByTagName('video'))

  if (videos.length === 0) {
    const timeout = parseInt(2 * attempts_left * 1000)
    setTimeout(() => main(attempts_left - 1), timeout)
    return
  }

  videos.map(video => {
    // For each video
    video.onloadeddata = () => {
      // Once the video has loaded, wait 0.5s before working with it
      setTimeout(() => handleVideo(video), 500)
    }
  })
}



if (typeof main === 'function') {
  registerElements()
  main(ATTEMPTS_TO_LOCATE_VIDEOS)
}
