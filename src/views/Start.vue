<template>
  <SlideTransition :direction="getRouteDirection">
    <SafeArea class="app theme-default">
      <ShakeTransition ref="shake">
        <div class="app-content">
          <div class="d-flex flex-column align-items-center">
            <div class="mb-3">
              <VectorReadQRCode/>
            </div>
            <p class="text-center p-3">
              {{ $t('instructions') }}
            </p>
            <form @submit.prevent="signIn">
              <div class="form-group">
                <input type="text" maxlength="20" class="form-control text-center text-uppercase" v-model="code"
                  :disabled="loading">
              </div>
              <button type="submit" class="btn btn-block btn-primary" :disabled="loading">
                {{ $t('submit') }}
              </button>
            </form>
          </div>
        </div>
      </ShakeTransition>
    </SafeArea>
  </SlideTransition>
</template>

<script>
import { VectorReadQRCode } from '@/vectors'

export default {
  name: 'start',
  components: {
    VectorReadQRCode
  },
  data() {
    return {
      code: '',
      loading: false
    }
  },
  async mounted() {
    await this.checkForUpdate()

    this.code = this.$route.query.code
    if (this.code) await this.signIn()
  },
  methods: {
    async signIn() {
      this.loading = true

      let auth = null

      if (this.code) {
        this.session.code = this.code.toUpperCase()

        auth = await this.$api.auth.getToken(this.session.code)

        if (auth) {
          this.$api.virtualPath = auth.virtualPath
          this.$api.token = auth.token
          this.session.started = true
          this.$router.replace({ name: 'newOrder' })
        }
      }

      if (!auth) {
        this.$refs.shake.run()
      }

      this.loading = false
    },
    async checkForUpdate() {
      if (await this.$version.isUpToDate()) return
      this.$router.replace({ name: 'updateAvailable' })
    }
  }
}
</script>

<i18n>
{
  "br": {
    "instructions": "Escaneie o código QR ou digite o código impresso.",
    "submit": "Conectar"
  },
  "en": {
    "instructions": "Scan the QR code or enter the printed code.",
    "submit": "Connect"
  }
}
</i18n>
