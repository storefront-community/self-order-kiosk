import ScaleTransition from './ScaleTransition'
import ShakeTransition from './ShakeTransition'
import SlideTransition from './SlideTransition'
import SlideUpTransition from './SlideUpTransition'

export {
  ScaleTransition,
  ShakeTransition,
  SlideTransition,
  SlideUpTransition
}

export default {
  install (Vue) {
    Vue.component('ScaleTransition', ScaleTransition)
    Vue.component('ShakeTransition', ShakeTransition)
    Vue.component('SlideTransition', SlideTransition)
    Vue.component('SlideUpTransition', SlideUpTransition)
  }
}
