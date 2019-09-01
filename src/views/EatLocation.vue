<template>
  <div class="app-body" v-if="$session.started">
    <div class="app-header">
      <div class="container">
        <h1 class="display-3 py-2 text-center">
          {{ $t('title') }}
        </h1>
      </div>
    </div>
    <div class="app-content">
      <div class="container">
        <div class="row">
          <div class="col d-flex flex-column">
            <button type="button" class="btn btn-outline-primary py-5" @click="select('eatHere')">
              <i class="fa fa-4x fa-utensils mb-5"></i>
              <p class="display-3">{{ $t('eat_here') }}</p>
            </button>
          </div>
          <div class="col d-flex flex-column">
            <button type="button" class="btn btn-outline-primary py-5" @click="select('takeOut')">
              <i class="fa fa-4x fa-shopping-bag mb-5"></i>
              <p class="display-3">{{ $t('take_out') }}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="button" class="btn btn-outline-primary btn-lg mr-auto" @click="back">
          <i class="fa fa-arrow-left"></i>
          <span class="ml-3">{{ $t('back') }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'eatLocation',
  data() {
    return {
      order: this.$session.order
    }
  },
  methods: {
    back() {
      this.$router.push({ name: 'orderSummary' })
    },
    select(location) {
      this.order.takeOut = location === 'takeOut'
      this.$router.push({ name: 'identification' })
    }
  }
}
</script>

<i18n>
{
  "br": {
    "title": "Onde você gostaria de comer?",
    "eat_here": "Aqui",
    "take_out": "Vou levar",
    "back": "Voltar"
  },
  "en": {
    "title": "Where would you like to eat?",
    "eat_here": "Eat here",
    "take_out": "Take out",
    "back": "Back"
  }
}
</i18n>
