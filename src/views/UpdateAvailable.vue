<template>
  <form class="app-body" v-if="updateAvailable">
    <div class="app-content">
      <div class="container">
        <p class="text-center text-primary mb-4">
          <FontAwesome icon="sync-alt" size="4x"/>
        </p>
        <h3 class="text-center px-3 p-md-0 mb-4">
          {{ $t('title') }}
        </h3>
        <p class="text-center px-3 p-md-0">
          {{ $t('message') }}
        </p>
      </div>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="button" class="btn btn-primary mx-auto px-md-5 py-md-4" @click="update">
          {{ $t('update') }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'updateAvailable',
  data() {
    return {
      updateAvailable: false
    }
  },
  async mounted() {
    const app = await this.$api.settings.info()

    this.updateAvailable = process.env.VUE_APP_VERSION !== app.version

    if (!this.updateAvailable) {
      this.$delay(() => this.start())
    }
  },
  methods: {
    start() {
      this.$router.push({ name: 'start' })
    },
    update() {
      window.location.reload(true)
    }
  }
}
</script>

<i18n>
{
  "br": {
    "title": "Atualização disponível",
    "message": "Uma nova versão do aplicativo está disponível e é necessária para continuar.",
    "update": "Atualizar"
  },
  "en": {
    "title": "Update available",
    "message": "A new version of the app is available and required to continue.",
    "update": "Update"
  }
}
</i18n>
