<template>
  <SlideTransition :direction="getRouteDirection">
    <SafeArea :class="`app theme-${session.theme}`" v-if="session.started">
      <IdleTime/>
      <div class="app-header">
        <div>{{ $t('title') }}</div>
        <h3 class="text-right my-0 ml-auto">
          <Currency :amount="session.order.total()" class="text-primary font-weight-bold"/>
        </h3>
      </div>
      <div class="app-content">
        <div ref="swiper" class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide d-flex align-items-center px-3 px-lg-5 border-bottom"
              v-for="item in session.order.items" :key="item.id">
              <OrderItemCard :item="item"/>
            </div>
          </div>
        </div>
      </div>
      <div class="app-footer">
        <button type="button" class="btn btn-outline-primary" @click="addItem">
          {{ $t('back') }}
        </button>
        <div class="btn-group ml-auto">
          <button type="button" class="btn btn-outline-primary" @click="cancelOrder">
            {{ $t('cancel_order') }}
          </button>
          <button type="button" class="btn btn-primary" @click="complete">
            {{ $t('continue') }}
          </button>
        </div>
      </div>
    </SafeArea>
  </SlideTransition>
</template>

<script>
import Swiper from 'swiper'
import OrderItemCard from './partials/OrderItemCard'
import breakpoints from '@/constants/breakpoints'

export default {
  name: 'orderSummary',
  components: {
    OrderItemCard
  },
  mounted() {
    if (!this.session.started) {
      this.restart()
      return
    }

    this.$nextTick(() => this.initSwipeGesture())
  },
  methods: {
    addItem() {
      this.$router.push({ name: 'chooseItemGroup' })
    },
    cancelOrder() {
      this.$router.push({ name: 'cancelOrder' })
    },
    complete() {
      this.$router.push({ name: 'eatLocation' })
    },
    initSwipeGesture() {
      if (!this.$refs.swiper) return

      const swiper = new Swiper(this.$refs.swiper, {
        slidesPerView: this.slidesPerView(),
        centeredSlides: false,
        spaceBetween: 20,
        direction: 'vertical'
      })

      window.addEventListener('resize', () => {
        swiper.params.slidesPerView = this.slidesPerView()
        swiper.update()
      })
    },
    restart() {
      this.$router.push({ name: 'start' })
    },
    slidesPerView() {
      if (this.$device.screen.safeArea.height() >= breakpoints[1280]) return 3.5
      if (this.$device.screen.safeArea.height() >= breakpoints[800]) return 2.5
      else return 1.5
    }
  }
}
</script>

<i18n>
{
  "br": {
    "back": "Cardápio",
    "cancel_order": "Cancelar",
    "continue": "Finalizar",
    "title": "Seu pedido"
  },
  "en": {
    "back": "Menu",
    "cancel_order": "Cancel",
    "continue": "Complete",
    "title": "Your order"
  }
}
</i18n>
