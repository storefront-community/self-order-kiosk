export default {
  install (Vue) {
    const locale = /br/i.test(navigator.language) ? 'br' : 'en'

    Vue.mixin({
      beforeCreate() {
        this.$session.locale = this.$session.locale || locale
      },
      mounted() {
        this.$api.locale = this.$session.locale
        this.$i18n.locale = this.$session.locale
      }
    })
  }
}
