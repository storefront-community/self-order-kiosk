<template>
  <SlideTransition :direction="getRouteDirection">
    <SafeArea :class="`app theme-${session.theme}`" v-if="session.started">
      <IdleTime/>
      <div class="app-header">
        <div class="m-auto">
          {{ session.itemGroup.name }}
        </div>
      </div>
      <div class="app-content">
        <div class="d-block">
          <div ref="swiper" class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in session.itemGroup.items" :key="item.fakeId">
                <ItemButton ref="itemButton" :item="item" @click="select(item)" @imagePreload="loadImages"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="app-footer">
        <button type="button" class="btn btn-outline-primary" @click="back">
          <FontAwesome icon="arrow-left"/>
          <span class="ml-3">{{ $t('back') }}</span>
        </button>
      </div>
    </SafeArea>
  </SlideTransition>
</template>

<script>
import Swiper from 'swiper'
import ItemButton from './partials/ItemButton'
import breakpoints from '@/constants/breakpoints'

export default {
  name: 'chooseItem',
  components: {
    ItemButton
  },
  async mounted() {
    if (!this.session.started) {
      this.restart()
      return
    }

    await this.listItems()
    this.$nextTick(() => this.initSwipeGesture())
  },
  methods: {
    async listItems() {
      this.session.itemGroup.items = await this.$api.items.list(this.session.itemGroup.id)
    },
    back() {
      this.$router.push({ name: 'chooseItemGroup' })
    },
    initSwipeGesture() {
      if (!this.$refs.swiper) return

      const swiper = new Swiper(this.$refs.swiper, {
        direction: 'horizontal',
        slidesPerView: Math.min(this.session.itemGroup.items.length, 3.25),
        slidesPerColumn: this.slidesPerColumn(),
        spaceBetween: 50,
        centeredSlides: false,
        breakpoints: {
          [breakpoints[1280]]: {
            slidesPerView: Math.min(this.session.itemGroup.items.length, 2.25),
            spaceBetween: 30,
            centeredSlides: false
          },
          [breakpoints[600]]: {
            slidesPerView: Math.min(this.session.itemGroup.items.length, 1.5),
            spaceBetween: 20,
            centeredSlides: true
          }
        }
      })

      window.addEventListener('resize', () => {
        swiper.params.slidesPerColumn = this.slidesPerColumn()
        swiper.update()
      })
    },
    loadImages() {
      const preloading = this.$refs.itemButton
        .map(card => card.image.preloading)
        .includes(true)

      if (preloading) return

      this.$refs.itemButton.forEach(card => card.image.load())
    },
    restart() {
      this.$router.push({ name: 'start' })
    },
    select(item) {
      this.session.item = item
      this.$router.push({ name: 'customizeItem' })
    },
    slidesPerColumn() {
      if (this.$device.screen.safeArea.height() >= breakpoints[1440]) return 2
      else return 1
    }
  }
}
</script>

<i18n>
{
  "br": {
    "back": "Voltar",
    "tap_to_select": "Toque para selecionar"
  },
  "en": {
    "back": "Back",
    "tap_to_select": "Tap to select"
  }
}
</i18n>
