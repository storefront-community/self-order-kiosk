<template>
  <div class="app-body">
    <div class="ap-header text-center">
      <img :src="`/livedemo/logo/${$i18n.locale}.svg`" class="logo">
    </div>
    <div class="app-content">
      <div class="container">
        <div class="row">
          <div class="col d-flex flex-column">
            <h1 class="display-3 text-center mb-5">
              {{ $t('title') }}
            </h1>
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
          <div class="col d-flex flex-column" v-if="false">
            <h1 class="display-3 text-center mb-5">
              {{ $t('mobile.title') }}
            </h1>
            <p class="text-center">
              {{ $t('mobile.subtitle') }}
            </p>
            <div class="d-flex justify-content-center">
              <QRCode value="https://kiosk.storefront.community" :options="{ width: 256 }"/>
            </div>
            <div class="text-center">
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
</template>

<script>
import QRCode from '@chenfengyuan/vue-qrcode'

export default {
  name: 'start',
  components: {
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
      this.$router.push({ name: 'chooseCategory' })
    }
  }
}
</script>

<i18n>
{
  "br": {
    "title": "Faça seu pedido aqui",
    "subtitle": "Use este totem para pedir seu prato",
    "start_button": "Iniciar pedido",
    "mobile": {
      "title": "Use seu smartphone",
      "subtitle": "Escaneia o QR Code e peça seu prato"
    }
  },
  "en": {
    "title": "Make your order here",
    "subtitle": "Use this terminal to order your food",
    "start_button": "Start order",
    "mobile": {
      "title": "Use your mobile phone",
      "subtitle": "Scan the QR code and order your food"
    }
  }
}
</i18n>
