import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

Vue.mixin({
  mounted () {
    this.$i18n.locale = this.$session.locale
  }
})

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en'
})
