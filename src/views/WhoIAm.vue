<template>
  <SlideTransition :direction="nextRouteDirection" v-if="routeDirection">
    <TimedPage>
      <SafeArea :class="`app theme-${session.theme}`" v-if="session.started">
        <form class="app-body" @submit.prevent="next">
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
                      <FontAwesome icon="user" class="ml-3"/>
                    </span>
                  </div>
                  <div class="form-control form-control-lg border-left-0">
                    {{ name }}_
                  </div>
                </div>
              </div>
            </div>
            <Keyboard v-model="name" :maxlength="20"/>
          </div>
          <div class="app-footer">
            <div class="container d-flex">
              <button type="button" class="btn btn-outline-primary mr-auto px-md-5 py-md-4 text-nowrap" @click="back">
                <FontAwesome icon="arrow-left"/>
                <span class="ml-3">{{ $t('back') }}</span>
              </button>
              <SlideUpTransition>
                <button type="submit" class="btn btn-primary ml-auto px-md-5 py-md-4 text-nowrap" v-if="formIsValid">
                  <FontAwesome icon="check"/>
                  <span class="ml-3">{{ $t('complete') }}</span>
                </button>
                <div class="d-flex align-items-center ml-auto px-3 text-right text-primary" v-else>
                  {{ $t('type_your_name') }}
                </div>
              </SlideUpTransition>
            </div>
          </div>
        </form>
      </SafeArea>
    </TimedPage>
  </SlideTransition>
</template>

<script>
import { Keyboard, SafeArea, TimedPage } from '@/components'
import { SlideTransition, SlideUpTransition } from '@/transitions'

export default {
  name: 'whoIAm',
  components: {
    Keyboard,
    SafeArea,
    SlideTransition,
    SlideUpTransition,
    TimedPage
  },
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
