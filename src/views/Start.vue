<template>
  <div class="app-body">
    <div class="app-content">
      <div class="container">
        <div class="row">
          <div class="col d-flex flex-column">
            <h1 class="display-3 text-center mb-5">
              Make your order here
            </h1>
            <p class="text-center mb-5">
              Use this terminal to order your food
            </p>
            <button type="button" class="btn btn-primary btn-lg m-auto p-5" @click="start">
              <span class="text-uppercase">
                Start order
              </span>
            </button>
          </div>
          <div class="col d-flex flex-column">
            <h1 class="display-3 text-center mb-5">
              Use your mobile phone
            </h1>
            <p class="text-center">
              Scan the QR code and order your food
            </p>
            <div class="d-flex justify-content-center">
              <QRCode value="https://storefront.community" :options="{ width: 256 }"/>
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
  mounted() {
    this.$session.init()
  },
  methods: {
    start() {
      this.$router.push({ name: 'identification' })
    }
  },
  components: {
    QRCode
  }
}
</script>
