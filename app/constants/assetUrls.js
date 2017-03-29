
const assetBase = 'img'
const urlFromName = imageName => `url(${chrome.extension.getURL(`${assetBase}/${imageName}`)})`

export default {

  APP_LOGOS: {
    dark: urlFromName('logo-dark.png'),
    light: urlFromName('logo-light.png')
  },

  logos: {
    youtube: urlFromName('youtube-logo.svg')
  },

  controls: {
    plus: urlFromName('plus.svg'),
    exit: urlFromName('x.svg')
  }

}
