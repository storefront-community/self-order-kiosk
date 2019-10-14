<template>
  <SlideTransition :direction="getRouteDirection">
    <SafeArea :class="`app theme-${session.theme}`" v-if="session.started">
      <IdleTime/>
      <form class="app-body" @submit.prevent="add">
        <div class="app-header">
          <div class="container">
            <div class="text-center">
              {{ session.itemGroup.name }}
            </div>
          </div>
        </div>
        <div class="app-content">
          <div ref="swiper" class="container swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in session.itemGroup.items" :key="item.id">
                <ItemCardButton ref="itemCardButton" :item="item" @click="select(item)" @imagePreload="loadImages"/>
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
      </form>
    </SafeArea>
  </SlideTransition>
</template>

<script>
import Swiper from 'swiper'
import { IdleTime, SafeArea } from '@/components'
import { SlideTransition } from '@/transitions'
import ItemCardButton from './partials/ItemCardButton'
import breakpoints from '@/constants/breakpoints'

export default {
  name: 'chooseItem',
  components: {
    IdleTime,
    ItemCardButton,
    SafeArea,
    SlideTransition
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

      new Swiper(this.$refs.swiper, {
        direction: 'horizontal',
        slidesPerView: Math.min(this.session.itemGroup.items.length, 3.5),
        spaceBetween: 20,
        centeredSlides: false,
        breakpoints: {
          [breakpoints.HORIZONTAL.LG]: {
            slidesPerView: Math.min(this.session.itemGroup.items.length, 2.5),
            centeredSlides: false
          },
          [breakpoints.HORIZONTAL.MD]: {
            slidesPerView: Math.min(this.session.itemGroup.items.length, 1.5),
            centeredSlides: false
          },
          [breakpoints.HORIZONTAL.SM]: {
            slidesPerView: Math.min(this.session.itemGroup.items.length, 1.5),
            centeredSlides: true
          }
        },
        on: {
          progress: (value) => {
            if (!this.$refs.swiper) return
            this.$refs.swiper.classList.toggle('shadow-start', value > 0)
            this.$refs.swiper.classList.toggle('shadow-end', value < 1)
          }
        }
      })
    },
    loadImages() {
      const preloading = this.$refs.itemCardButton
        .map(card => card.image.preloading)
        .includes(true)

      if (preloading) return

      this.$refs.itemCardButton.forEach(card => card.image.load())
    },
    restart() {
      this.$router.push({ name: 'start' })
    },
    select(item) {
      this.session.item = item
      this.$router.push({ name: 'customizeItem' })
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
