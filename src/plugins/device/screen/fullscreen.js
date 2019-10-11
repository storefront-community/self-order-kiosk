function isActive() {
  return document.isFullScreen ||
    document.fullscreenElement ||
    document.mozFullScreenElement || // Firefox
    document.webkitFullscreenElement || // Chrome, Safari and Opera
    document.msFullscreenElement // IE/Edge
}

function enter() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen()
  } else if (document.documentElement.mozRequestFullScreen) { // Firefox
    document.documentElement.mozRequestFullScreen()
  } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
    document.documentElement.webkitRequestFullscreen()
  } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
    document.documentElement.msRequestFullscreen()
  }
}

function exit() {
  if (isActive()) {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen()
    }
  }
}

export default { enter, exit }
