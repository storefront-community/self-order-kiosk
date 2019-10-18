<template>
  <SlideTransition :direction="getRouteDirection">
    <SafeArea :class="`app theme-${session.theme}`" v-if="session.started">
      <IdleTime/>
      <div class="app-header">
        <div class="m-auto">
          {{ title }}
        </div>
      </div>
      <div class="app-content">
        <div class="d-block h-100">
          <div ref="swiper" class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide text-center" v-for="itemGroup in itemGroups" :key="itemGroup.id">
                <ItemGroupButton ref="itemGroupButton" :itemGroup="itemGroup"
                  @click="select(itemGroup)" @imagePreload="loadImages"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="app-footer">
        <button type="button" class="btn btn-outline-primary" @click="back" v-if="!orderHasItem">
          <FontAwesome icon="arrow-left"/>
          <span class="ml-3">
            {{ $t('back') }}
          </span>
        </button>
        <button type="button" class="btn btn-primary ml-auto" @click="back" v-if="orderHasItem">
          {{ $t('order_summary') }}
        </button>
      </div>
    </SafeArea>
  </SlideTransition>
</template>

<script>
import Swiper from 'swiper'
import ItemGroupButton from './partials/ItemGroupButton'
import breakpoints from '@/constants/breakpoints'

export default {
  name: 'chooseItemGroup',
  components: {
    ItemGroupButton
  },
  data() {
    return {
      itemGroups: []
    }
  },
  async mounted() {
    if (!this.session.started) {
      this.restart()
      return
    }

    await this.listItemGroups()
    this.$nextTick(() => this.initSwipeGesture())
  },
  methods: {
    async listItemGroups() {
      this.itemGroups = await this.$api.itemGroups.list()
    },
    back() {
      const routeName = this.orderHasItem ? 'orderSummary' : 'newOrder'
      this.$router.push({ name: routeName })
    },
    centeredSlides() {
      const slidesPerView = this.slidesPerView()
      return parseInt(slidesPerView) === 1
    },
    initSwipeGesture() {
      if (!this.$refs.swiper) return

      const swiper = new Swiper(this.$refs.swiper, {
        direction: 'horizontal',
        slidesPerView: this.slidesPerView(),
        centeredSlides: this.centeredSlides(),
        spaceBetween: 30
      })

      window.addEventListener('resize', () => {
        swiper.slidesPerView = this.slidesPerView()
        swiper.centeredSlides = this.centeredSlides()
        swiper.update()
      })
    },
    loadImages() {
      const preloading = this.$refs.itemGroupButton
        .map(button => button.image.preloading)
        .includes(true)

      if (preloading) return

      this.$refs.itemGroupButton.forEach(button => button.image.load())
    },
    restart() {
      this.$router.push({ name: 'start' })
    },
    select(itemGroup) {
      this.session.itemGroup = itemGroup
      this.$router.push({ name: 'chooseItem' })
    },
    slidesPerView() {
      if (this.$device.screen.orientation() === 'horizontal') {
        if (this.$device.screen.safeArea.width() >= breakpoints[1280]) {
          return Math.min(this.itemGroups.length, 3.5)
        }

        if (this.$device.screen.safeArea.width() >= breakpoints[800]) {
          return Math.min(this.itemGroups.length, 2.5)
        }
      }

      return 1.75
    }
  },
  computed: {
    orderHasItem() {
      return !!this.session.order.items.length
    },
    title() {
      return this.orderHasItem ? this.$t('title_with_items') : this.$t('title_without_items')
    }
  }
}
</script>

<i18n>
{
  "br": {
    "back": "Voltar",
    "tap_to_select": "Toque para selecionar",
    "title_with_items": "O que mais você gostaria hoje?",
    "title_without_items": "O que você gostaria hoje?",
    "order_summary": "Meu pedido"
  },
  "en": {
    "back": "Back",
    "tap_to_select": "Tap to select",
    "title_with_items": "What else would you like today?",
    "title_without_items": "What would you like today?",
    "order_summary": "My order"
  }
}
</i18n>
