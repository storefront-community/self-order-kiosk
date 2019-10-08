<template>
  <SafeArea :class="`app theme-${session.theme}`">
    <div class="app-body" v-if="session.started">
      <div class="app-header">
        <div class="container">
          <div class="text-center">
            {{ $t('title') }}
          </div>
        </div>
      </div>
      <div class="app-content">
        <div class="container">
          <div class="row">
            <div class="col d-flex flex-column">
              <button type="button" class="btn btn-outline-primary py-5 flex-grow-1" @click="select('eatHere')">
                <FontAwesome icon="utensils" size="4x" class="mb-5"/>
                <h4 class="font-weight-normal">{{ $t('eat_here') }}</h4>
              </button>
            </div>
            <div class="col d-flex flex-column">
              <button type="button" class="btn btn-outline-primary py-5 flex-grow-1" @click="select('takeOut')">
                <FontAwesome icon="shopping-bag" size="4x" class="mb-5"/>
                <h4 class="font-weight-normal">{{ $t('take_out') }}</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="app-footer">
        <div class="container d-flex">
          <button type="button" class="btn btn-outline-primary mr-auto px-md-5 py-md-4 text-nowrap" @click="back">
            <FontAwesome icon="arrow-left"/>
            <span class="ml-3">{{ $t('back') }}</span>
          </button>
        </div>
      </div>
    </div>
  </SafeArea>
</template>

<script>
import { SafeArea } from '@/components'

export default {
  name: 'eatLocation',
  components: {
    SafeArea
  },
  methods: {
    back() {
      this.$router.push({ name: 'orderSummary' })
    },
    select(location) {
      this.session.order.takeOut = location === 'takeOut'
      this.$router.push({ name: 'whoIAm' })
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
