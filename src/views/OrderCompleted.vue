<template>
  <form class="app-body" @submit.prevent="exit" v-if="$session.started">
    <div class="app-header">
      <div class="container">
        <h1 class="display-3 py-2 text-center">
          {{ $t('title') }}
        </h1>
      </div>
    </div>
    <div class="app-content">
      <div class="container">
        <p class="text-center mb-4">
          <i class="far fa-4x fa-smile"></i>
        </p>
        <p class="display-4 text-center">
          {{ $t('thank_you') }}
        </p>
        <p class="text-center">
          {{ $t('instructions') }}
        </p>
      </div>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="submit" class="btn btn-primary btn-lg mr-auto">
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
