<template>
  <SlideTransition :direction="getRouteDirection">
    <SafeArea class="app theme-default">
      <div class="app-body" v-if="updateAvailable">
        <div class="app-content">
          <div class="container">
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
              <button type="button" class="btn btn-primary px-md-5 py-md-4" @click="update">
                {{ $t('updateAvailable.update') }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="app-body" v-else>
        <div class="app-content">
          <div class="container">
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
              <router-link :to="{ name: 'start' }" class="btn btn-primary px-md-5 py-md-4">
                {{ $t('upToDate.ok') }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </SafeArea>
  </SlideTransition>
</template>

<script>
import { SafeArea } from '@/components'
import { SlideTransition } from '@/transitions'

export default {
  name: 'updateAvailable',
  components: {
    SafeArea,
    SlideTransition
  },
  data() {
    return {
      updateAvailable: false
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
