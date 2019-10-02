<template>
  <div class="app-body">
    <div class="app-content">
      <div class="container d-flex flex-column h-100">
        <div class="text-center">
          <Logo/>
        </div>
        <h2 class="font-weight-normal text-center d-flex flex-grow-1 align-items-center">
          <span class="m-auto">
            {{ $t('title') }}
          </span>
        </h2>
        <div class="row">
          <div class="col-12 col-md-6 d-flex flex-grow-1 justify-content-center justify-content-md-end">
            <div class="d-flex flex-column mr-md-5">
              <button type="button" class="btn btn-primary btn-lg m-auto p-5" @click="start">
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
                <QRCode value="https://kiosk.storefront.community" :options="{ width: 256 }"/>
              </div>
              <div class="text-center d-none">
                <small>
                  Do not have an app?<br>
                  <span class="text-primary">
                    qrcode.watch
                  </span>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Logo } from '@/components'
import QRCode from '@chenfengyuan/vue-qrcode'

export default {
  name: 'start',
  components: {
    Logo,
    QRCode
  },
  mounted() {
    this.$session.start()
  },
  methods: {
    changeLocale(locale) {
      this.$api.locale = locale
      this.$i18n.locale = locale
      this.$session.locale = locale
    },
    start() {
      this.$router.push({ name: 'chooseItemGroup' })
    }
  }
}
</script>

<i18n>
{
  "br": {
    "title": "Bateu aquela fome?",
    "start_button": "Faça seu pedido"
  },
  "en": {
    "title": "Are you hungry?",
    "start_button": "Make your order"
  }
}
</i18n>
