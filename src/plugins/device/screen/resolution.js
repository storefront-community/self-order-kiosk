const sizes = [320, 480, 600, 800, 960, 1080, 1280, 1440, 1920]

export default function () {
  const minSize = Math.min(window.outerWidth, window.outerHeight)
  return sizes.find(size => size >= minSize)
}
