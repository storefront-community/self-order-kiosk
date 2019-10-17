import Currency from './Currency'
import IdleTime from './IdleTime'
import Keyboard from './Keyboard'
import Loader from './Loader'
import Logo from './Logo'
import ProgressiveImage from './ProgressiveImage'
import SafeArea from './SafeArea'

export {
  Currency,
  IdleTime,
  Keyboard,
  Loader,
  Logo,
  ProgressiveImage,
  SafeArea
}

export default {
  install (Vue) {
    Vue.component('Currency', Currency)
    Vue.component('IdleTime', IdleTime)
    Vue.component('Keyboard', Keyboard)
    Vue.component('Loader', Loader)
    Vue.component('Logo', Logo)
    Vue.component('ProgressiveImage', ProgressiveImage)
    Vue.component('SafeArea', SafeArea)
  }
}
