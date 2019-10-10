<template>
  <SlideTransition :direction="getRouteDirection" v-if="routeDirection">
    <TimedPage>
      <SafeArea :class="`app theme-${session.theme}`" v-if="session.started">
        <form class="app-body">
          <div class="app-content">
            <div class="container">
              <p class="text-center text-primary mb-4">
                <FontAwesome icon="times-circle" size="4x"/><br>
              </p>
              <h3 class="text-center px-3 p-md-0 mb-4">
                {{ $t('cancel_order') }}
              </h3>
              <p class="text-center px-3 p-md-0">
                {{ $t('warning') }}
              </p>
            </div>
          </div>
          <div class="app-footer">
            <div class="container d-flex">
              <button type="button" class="btn btn-primary mr-auto px-md-5 py-md-4" @click="neverMind">
                {{ $t('no') }}
              </button>
              <button type="button" class="btn btn-outline-primary ml-auto px-md-5 py-md-4" @click="cancel">
                {{ $t('yes') }}
              </button>
            </div>
          </div>
        </form>
      </SafeArea>
    </TimedPage>
  </SlideTransition>
</template>

<script>
import { SafeArea, TimedPage } from '@/components'
import { SlideTransition } from '@/transitions'

export default {
  name: 'cancelOrder',
  components: {
    SafeArea,
    SlideTransition,
    TimedPage
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.previousRoute = from.name
    })
  },
  mounted() {
    if (!this.session.started) {
      this.restart()
    }
  },
  data() {
    return {
      previousRoute: null
    }
  },
  methods: {
    cancel() {
      this.$router.push({ name: 'newOrder' })
    },
    neverMind() {
      this.$router.push({ name: this.previousRoute })
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
    "cancel_order": "Cancelar pedido?",
    "warning": "Seu pedido será cancelado. Nós não poderemos desfazer essa ação.",
    "no": "Não, não cancele",
    "yes": "Sim, cancele o pedido"
  },
  "en": {
    "cancel_order": "Cancel order?",
    "warning": "Your order will be canceled. We can't undo this action.",
    "no": "No, do not cancel",
    "yes": "Yes, cancel order"
  }
}
</i18n>
