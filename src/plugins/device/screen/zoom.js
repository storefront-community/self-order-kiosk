function reset() {
  const scale = 'scale(1)'
  document.body.style.webkitTransform = scale // Chrome, Opera, Safari
  document.body.style.msTransform = scale     // IE 9
  document.body.style.transform = scale       // Standard
  document.body.style.zoom = '100%'
}

function disable() {
  document.addEventListener('touchmove', _preventPinchZoom, { passive: false })
  document.addEventListener("touchstart", _preventMultiTouch, { passive: false })
  document.addEventListener('mousewheel', _preventCtrlMousewheel, { passive: false })
  document.addEventListener('DOMMouseScroll', _preventCtrlMousewheel, { passive: false })
  document.addEventListener("keydown", _preventKeyZoom, { passive: false })

  reset()
}

function _preventPinchZoom(event) {
  if (event.scale !== 1) event.preventDefault()
}

function _preventMultiTouch(event) {
  if (event.touches.length > 1) event.preventDefault()
}

function _preventCtrlMousewheel(event) {
  if (event.ctrlKey) event.preventDefault()
}

function _preventKeyZoom(event) {
  const preventedKeys = [48, 61, 96, 107, 109, 187, 189]

  if (event.ctrlKey && preventedKeys.indexOf(event.keyCode) >= 0) {
    event.preventDefault()
  }
}

export default { disable, reset }
