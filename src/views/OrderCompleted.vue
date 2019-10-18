<template>
  <SlideTransition :direction="getRouteDirection">
    <SafeArea :class="`app theme-${session.theme}`" v-if="session.started">
      <IdleTime :seconds="30"/>
      <div class="app-header">
        <div class="m-auto">
          {{ $t('title') }}
        </div>
      </div>
      <div class="app-content">
        <div class="px-3">
          <p class="text-center mb-4">
            <FontAwesome :icon="['far', 'smile']" size="4x"/>
          </p>
          <h3 class="text-center mb-4">
            {{ $t('thank_you') }}
          </h3>
          <p class="text-center">
            {{ $t('instructions') }}
          </p>
        </div>
      </div>
      <div class="app-footer">
        <button type="button" class="btn btn-primary mx-auto" @click="exit">
          {{ $t('exit') }}
        </button>
      </div>
    </SafeArea>
  </SlideTransition>
</template>

<script>
export default {
  name: 'orderCompleted',
  mounted() {
    if (!this.session.started) {
      this.restart()
    }
  },
  methods: {
    exit() {
      this.$router.push({ name: 'newOrder' })
    },
    restart() {
      this.$router.push({ name: 'start' })
    }
  }
}
</script>

<i18n>
{
  "br": {
    "title": "Oba! Seu pedido foi feito.",
    "thank_you": "Obrigado!",
    "instructions": "Te chamaremos pelo nome assim que terminarmos de preparar.",
    "exit": "Encerrar"
  },
  "en": {
    "title": "Yay! Your order has been done.",
    "thank_you": "Thank you!",
    "instructions": "We'll call you by name as soon as we finish cooking.",
    "exit": "Close"
  }
}
</i18n>
