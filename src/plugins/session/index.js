import AppSession from './AppSession'

export default {
  install (Vue) {
    const locale = /br/i.test(navigator.language) ? 'br' : 'en'

    Vue.prototype.$session = new AppSession(locale)

    Vue.mixin({
      mounted() {
        this.$api.locale = this.$session.locale
        this.$i18n.locale = this.$session.locale
      }
    })
  }
}
