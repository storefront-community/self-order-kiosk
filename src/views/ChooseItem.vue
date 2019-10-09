<template>
  <SafeArea :class="`app theme-${session.theme}`" v-if="session.started">
    <form class="app-body" @submit.prevent="add">
      <div class="app-header">
        <div class="container">
          <div class="text-center">
            {{ session.itemGroup.name }}
          </div>
        </div>
      </div>
      <div class="app-content">
        <SwiperContainer ref="swiper">
          <SwiperSlide v-for="item in session.itemGroup.items" :key="item.id">
            <ItemCardButton ref="itemCardButton" :item="item" @click="select(item)" @imagePreload="loadImages"/>
          </SwiperSlide>
        </SwiperContainer>
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
</template>

<script>
import { SafeArea, SwiperContainer, SwiperSlide } from '@/components'
import ItemCardButton from './partials/ItemCardButton'
import breakpoints from '@/constants/breakpoints'

export default {
  name: 'chooseItem',
  components: {
    ItemCardButton,
    SafeArea,
    SwiperContainer,
    SwiperSlide
  },
  async mounted() {
    if (!this.session.started) return

    this.session.itemGroup.items = await this.$api.items.list(this.session.itemGroup.id)

    if (!this.$refs.swiper) return

    this.$refs.swiper.init({
      slidesPerView: Math.min(this.session.itemGroup.items.length, 3.5),
      centeredSlides: false,
      spaceBetween: 20,
      direction: 'horizontal',
      shadowEnabled: this.session.itemGroup.items.length > 3,
      breakpoints: {
        [breakpoints.LG]: {
          slidesPerView: Math.min(this.session.itemGroup.items.length, 2.5),
          centeredSlides: false
        },
        [breakpoints.MD]: {
          slidesPerView: Math.min(this.session.itemGroup.items.length, 1.5),
          centeredSlides: false
        },
        [breakpoints.SM]: {
          slidesPerView: Math.min(this.session.itemGroup.items.length, 1.5),
          centeredSlides: true
        }
      }
    })
  },
  methods: {
    back() {
      this.$router.push({ name: 'chooseItemGroup' })
    },
    loadImages() {
      const preloading = this.$refs.itemCardButton
        .map(card => card.image.preloading)
        .includes(true)

      if (preloading) return

      this.$refs.itemCardButton.forEach(card => card.image.load())
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
