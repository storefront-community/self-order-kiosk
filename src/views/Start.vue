<template>
  <div class="app-body">
    <div class="ap-header text-center">
      <img :src="`/livedemo/logo/${$i18n.locale}.png`" class="logo">
    </div>
    <div class="app-content">
      <div class="container d-flex flex-column h-100">
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
    "title": "Com fome?",
    "start_button": "Iniciar pedido"
  },
  "en": {
    "title": "Hungry?",
    "start_button": "Start order"
  }
}
</i18n>
