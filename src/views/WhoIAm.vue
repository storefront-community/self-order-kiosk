<template>
  <SlideTransition :direction="getRouteDirection">
    <SafeArea :class="`app theme-${session.theme}`" v-if="session.started">
      <IdleTime/>
      <div class="app-header">
        <span class="m-auto">
          {{ $t('title') }}
        </span>
      </div>
      <div class="app-content">
        <div class="form-group">
          <div class="form-control form-control-lg text-center">
            {{ name }}
          </div>
        </div>
        <Keyboard v-model="name" :maxlength="20"/>
      </div>
      <div class="app-footer">
        <button type="button" class="btn btn-outline-primary" @click="back">
          <FontAwesome icon="arrow-left"/>
          <span class="ml-3">{{ $t('back') }}</span>
        </button>
        <SlideUpTransition>
          <button type="button" class="btn btn-primary ml-auto" @click="next" v-if="formIsValid">
            <FontAwesome icon="check"/>
            <span class="ml-3">{{ $t('complete') }}</span>
          </button>
          <div class="d-flex align-items-center text-primary ml-auto px-3" v-else>
            {{ $t('type_your_name') }}
          </div>
        </SlideUpTransition>
      </div>
    </SafeArea>
  </SlideTransition>
</template>

<script>
export default {
  name: 'whoIAm',
  data() {
    return {
      name: ''
    }
  },
  mounted() {
    if (!this.session.started) {
      this.restart()
      return
    }

    this.name = this.session.order.name
  },
  methods: {
    back() {
      this.$router.push({ name: 'eatLocation' })
    },
    next() {
      this.session.order.name = this.name.trim()
      this.$router.push({ name: 'orderCompleted' })
    },
    restart() {
      this.$router.push({ name: 'start' })
    }
  },
  computed: {
    formIsValid() {
      return this.name.trim().length >= 3
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
