<template>
  <SafeArea class="app theme-default">
    <ShakeTransition ref="shake">
      <div class="app-body">
        <div class="app-content">
          <div class="container d-flex flex-column align-items-center">
            <div class="mb-3">
              <svg width="67.382" height="128">
                <g fill="none" stroke="#495057" stroke-width="1.768">
                  <path d="M19.607 50.93h13.106v13.114H19.607z"/>
                  <path d="M23.1 54.43h6.107v6.1H23.1zm12.255 12.255h5.23v5.235h-5.23zm7.875 7.875h5.23v5.235h-5.23z"/>
                </g>
                <path d="M44.092 67.55h3.5v3.5h-3.5zm-7.874 7.88h3.5v3.5h-3.5z" fill="#495057" fill-rule="evenodd"/>
                <g fill="none">
                  <g stroke="#495057" stroke-width="1.768">
                    <path d="M19.607 66.685h13.106V79.8H19.607z"/>
                    <path d="M23.1 70.186h6.107v6.1H23.1zM35.355 50.93H48.46v13.114H35.355z"/>
                    <path d="M38.856 54.43h6.107v6.11h-6.107z"/>
                  </g>
                  <path d="M14.503 65.32h37.8" stroke="#fc1460" stroke-width="1.964" stroke-linecap="square"/>
                  <path d="M13.957 52.14v-6.866h7.13m26.893.001h6.858v7.14M21.494 85.777h-6.858v-7.14m39.8 2.723v4.4h-7.13" stroke="#2ecc71" stroke-linecap="round" stroke-linejoin="round" stroke-width=".982"/>
                  <g stroke="#495057" stroke-width="1">
                    <rect width="11.567" height="11.573" x="27.909" y="110.979" rx="5.784"/>
                    <path d="M.346 38.536v84.076c0 2.786 2.293 5.047 5.12 5.047h56.45c2.827 0 5.12-2.317 5.12-5.072V5.413c0-2.8-2.293-5.072-5.12-5.072H5.466A5.1 5.1 0 0 0 .346 5.48v15.232m66.7.054H.346m66.7 86.467H.346m66.7-68.697v84.076c0 2.786-2.293 5.047-5.12 5.047H5.466c-2.827 0-5.12-2.317-5.12-5.072V5.413C.346 2.612 2.64.34 5.466.34h56.45a5.1 5.1 0 0 1 5.12 5.139v15.232m-66.7.054h66.7m-66.7 86.467h66.7" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                </g>
              </svg>
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
      </div>
    </ShakeTransition>
  </SafeArea>
</template>

<script>
import { SafeArea } from '@/components'
import { ShakeTransition } from "@/transitions"

export default {
  name: 'index',
  components: {
    SafeArea,
    ShakeTransition
  },
  data() {
    return {
      code: '',
      loading: false
    }
  },
  async mounted() {
    if (!await this.$version.isUpToDate()) {
      this.$delay(() => this.updateAvailable())
      return
    }

    this.code = this.$route.query.code

    if (this.code) {
      this.$delay(() => this.signIn())
    }
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
    updateAvailable() {
      this.$router.replace({ name: 'update' })
    }
  }
}
</script>

<i18n>
{
  "br": {
    "instructions": "Use seu smartphone para escanar o código QR ou digite o código alfanumérico.",
    "submit": "Enviar código"
  },
  "en": {
    "instructions": "Use your mobile phone to scan the QR code or enter the alphanumeric code.",
    "submit": "Send code"
  }
}
</i18n>
