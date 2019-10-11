function disable() {
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault()
  }, { passive: false })
}

export default { disable }
