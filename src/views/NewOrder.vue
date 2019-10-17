<template>
  <SlideTransition :direction="getRouteDirection">
    <SafeArea :class="`app theme-${session.theme}`" v-if="session.started" @click="newOrder">
      <div class="app-header d-none d-lg-flex">
        <h1 class="m-auto font-weight-bold">
          {{ $t('order_here') }}
        </h1>
      </div>
      <div class="app-content">
        <Logo class="m-auto"/>
      </div>
      <div class="app-footer bg-primary p-3 p-md-5">
        <span class="text-uppercase m-auto">
          {{ $t('start_button') }}
        </span>
      </div>
    </SafeArea>
  </SlideTransition>
</template>

<script>
import { Order } from '@/models'

export default {
  name: 'newOrder',
  async mounted() {
    if (!this.session.started) {
      this.restart()
      return
    }

    const app = await this.$api.settings.get()
    this.session.theme = app.theme
  },
  methods: {
    newOrder() {
      this.session.order = new Order()
      this.$router.push({ name: 'chooseItemGroup' })
    },
    restart() {
      this.$router.push({ name: 'start' })
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
    "order_here": "Peça aqui",
    "start_button": "Toque para começar"
  },
  "en": {
    "order_here": "Order here",
    "start_button": "Touch to start"
  }
}
</i18n>
