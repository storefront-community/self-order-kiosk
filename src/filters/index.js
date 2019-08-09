import numeral from './numeral'

export default {
  install (Vue) {
    Vue.filter('numeral', numeral)
  }
}
