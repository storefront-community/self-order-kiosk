<template>
  <SlideTransition :direction="getRouteDirection">
    <SafeArea>
      <div :class="`app theme-${session.theme}`" v-if="session.started">
        <div class="app-body">
          <div class="app-content">
            <div class="container d-flex flex-column h-100">
              <div class="text-center">
                <Logo/>
              </div>
              <div class="d-flex flex-column flex-grow-1 justify-content-center">
                <div class="row">
                  <div class="col-12 col-md-6 d-flex flex-grow-1 justify-content-center justify-content-md-end">
                    <div class="d-flex flex-column mr-md-5">
                      <button type="button" class="btn btn-primary btn-lg m-auto p-5" @click="newOrder">
                        <span class="text-uppercase">
                          {{ $t('start_button') }}
                        </span>
                      </button>
                      <div class="text-center">
                        <button type="button" class="btn btn-flag" @click="changeLocale('br')">
                          <span class="flag-icon flag-icon-br"></span>
                        </button>
                        <button type="button" class="btn btn-flag" @click="changeLocale('en')">
                          <span class="flag-icon flag-icon-us"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 d-none d-md-flex">
                    <div class="d-flex flex-column ml-md-5">
                      <div class="d-flex justify-content-center">
                        <QRCode :value="url" :options="{ width: 256 }"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SafeArea>
  </SlideTransition>
</template>

<script>
import QRCode from '@chenfengyuan/vue-qrcode'
import { Logo, SafeArea } from '@/components'
import { Order } from '@/models'
import { SlideTransition } from '@/transitions'

export default {
  name: 'newOrder',
  components: {
    Logo,
    QRCode,
    SafeArea,
    SlideTransition
  },
  async mounted() {
    if (!this.session.started) {
      this.restart()
      return
    }

    const app = await this.$api.settings.get()
    this.session.theme = app.theme
  },
  methods: {
    changeLocale(locale) {
      this.$api.locale = locale
      this.$i18n.locale = locale
      this.session.locale = locale
    },
    restart() {
      this.$router.push({ name: 'start' })
    },
    newOrder() {
      this.session.order = new Order()
      this.$router.push({ name: 'chooseItemGroup' })
    }
  },
  computed: {
    url() {
      return `${process.env.VUE_APP_BASE_URL}#?code=${this.session.code}`
    }
  }
}
</script>

<i18n>
{
  "br": {
    "start_button": "Faça seu pedido"
  },
  "en": {
    "start_button": "Make your order"
  }
}
</i18n>
