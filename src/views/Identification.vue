<template>
  <form class="app-body" @submit.prevent="next" v-if="$session.started">
    <div class="app-header">
      <div class="container">
        <div class="text-center">
          {{ $t('title') }}
        </div>
      </div>
    </div>
    <div class="app-content">
      <div class="container container-sm">
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="lni-user ml-3"></i>
              </span>
            </div>
            <div class="form-control form-control-lg border-left-0">
              {{ order.name }}_
            </div>
          </div>
        </div>
      </div>
      <Keyboard v-model="order.name" :maxlength="20"/>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="button" class="btn btn-outline-primary mr-auto px-md-5 py-md-4 text-nowrap" @click="back">
          <i class="fa fa-arrow-left"></i>
          <span class="ml-3">{{ $t('back') }}</span>
        </button>
        <SlideUpTransition>
          <button type="submit" class="btn btn-primary ml-auto px-md-5 py-md-4 text-nowrap" v-if="formIsValid">
            <i class="fa fa-check"></i>
            <span class="ml-3">{{ $t('complete') }}</span>
          </button>
          <div class="ml-auto p-3 text-right text-primary" v-else>
            {{ $t('type_your_name') }}
          </div>
        </SlideUpTransition>
      </div>
    </div>
  </form>
</template>

<script>
import { Keyboard } from '@/components'
import { SlideUpTransition } from '@/transitions'

export default {
  name: 'identification',
  components: {
    Keyboard,
    SlideUpTransition
  },
  data() {
    return {
      order: this.$session.order
    }
  },
  methods: {
    back() {
      this.$router.push({ name: 'eatLocation' })
    },
    next() {
      this.order.name = this.order.name.trim()
      this.$router.push({ name: 'orderCompleted' })
    }
  },
  computed: {
    formIsValid() {
      return this.order.name.trim().length >= 3
    }
  }
}
</script>

<i18n>
{
  "br": {
    "title": "Como podemos te chamar?",
    "back": "Voltar",
    "complete": "Finalizar",
    "type_your_name": "Digite seu nome"
  },
  "en": {
    "title": "How can we call you?",
    "back": "Back",
    "complete": "Complete",
    "type_your_name": "Type your name"
  }
}
</i18n>
