<template>
  <form class="app-body" @submit.prevent="exit" v-if="$session.started">
    <div class="app-header">
      <div class="container">
        <div class="text-center">
          {{ $t('title') }}
        </div>
      </div>
    </div>
    <div class="app-content">
      <div class="container">
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
      <div class="container d-flex">
        <button type="submit" class="btn btn-primary px-md-5 py-md-4 mx-auto">
          {{ $t('exit') }}
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'orderCompleted',
  data() {
    return {
      order: this.$session.order
    }
  },
  methods: {
    exit() {
      this.$router.push({ name: 'startOrder' })
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
