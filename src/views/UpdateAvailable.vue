<template>
  <SlideTransition :direction="getRouteDirection">
    <SafeArea class="app theme-default">
      <div class="app-content" v-if="updateAvailable === true">
        <p class="text-center text-primary mb-4">
          <FontAwesome icon="sync-alt" size="4x"/>
        </p>
        <h3 class="text-center px-3 p-md-0 mb-4">
          {{ $t('updateAvailable.title') }}
        </h3>
        <p class="text-center px-3 p-md-0">
          {{ $t('updateAvailable.message') }}
        </p>
        <div class="text-center mt-4">
          <button type="button" class="btn btn-primary" @click="update">
            {{ $t('updateAvailable.update') }}
          </button>
        </div>
      </div>
      <div class="app-content" v-if="updateAvailable === false">
        <p class="text-center text-primary mb-4">
          <FontAwesome icon="check" size="4x"/>
        </p>
        <h3 class="text-center px-3 p-md-0 mb-4">
          {{ $t('upToDate.title') }}
        </h3>
        <p class="text-center px-3 p-md-0">
          {{ version }} {{ $t('upToDate.message') }}
        </p>
        <div class="text-center mt-4">
          <router-link :to="{ name: 'start' }" class="btn btn-primary">
            {{ $t('upToDate.ok') }}
          </router-link>
        </div>
      </div>
    </SafeArea>
  </SlideTransition>
</template>

<script>
export default {
  name: 'updateAvailable',
  data() {
    return {
      updateAvailable: null
    }
  },
  async mounted() {
    this.updateAvailable = !await this.$version.isUpToDate()
  },
  methods: {
    update() {
      window.location.reload(true)
    }
  },
  computed: {
    version() {
      return this.$version.current
    }
  }
}
</script>

<i18n>
{
  "br": {
    "updateAvailable": {
      "title": "Atualização disponível",
      "message": "Uma nova versão do aplicativo está disponível e é necessária para continuar.",
      "update": "Atualizar"
    },
    "upToDate": {
      "title": "Seu app está atualizado",
      "message": "é atualmente a versão mais nova disponível.",
      "ok": "Entendi"
    }
  },
  "en": {
    "updateAvailable": {
      "title": "Update available",
      "message": "A new version of the app is available and required to continue.",
      "update": "Update"
    },
    "upToDate": {
      "title": "Your app is up to date",
      "message": "is currently the newest version available.",
      "ok": "Got it"
    }
  }
}
</i18n>
