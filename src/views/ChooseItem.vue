<template>
  <form class="app-body" @submit.prevent="add" v-if="$session.started">
    <div class="app-header">
      <div class="container">
        <div class="text-center">
          {{ itemGroup.name }}
        </div>
      </div>
    </div>
    <div class="app-content">
      <SwiperContainer ref="swiper">
        <SwiperSlide v-for="item in itemGroup.items" :key="item.id">
          <ItemCardButton :item="item" @click="select(item)" />
        </SwiperSlide>
      </SwiperContainer>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="button" class="btn btn-outline-primary mr-auto px-md-5 py-md-4 text-nowrap" @click="back">
          <i class="fa fa-arrow-left"></i>
          <span class="ml-3">{{ $t('back') }}</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { SwiperContainer, SwiperSlide } from '@/components'
import ItemCardButton from './partials/ItemCardButton'
import breakpoints from '@/constants/breakpoints'

export default {
  name: 'chooseItem',
  components: {
    ItemCardButton,
    SwiperContainer,
    SwiperSlide
  },
  data() {
    return {
      itemGroup: this.$session.itemGroup
    }
  },
  async mounted() {
    if (!this.$session.started) return

    this.itemGroup.items = await this.$api.items.list(this.$session.itemGroup.id)

    if (!this.$refs.swiper) return

    this.$refs.swiper.init({
      slidesPerView: Math.min(this.itemGroup.items.length, 3.5),
      centeredSlides: false,
      spaceBetween: 20,
      direction: 'horizontal',
      shadowEnabled: this.itemGroup.items.length > 3,
      breakpoints: {
        [breakpoints.LG]: {
          slidesPerView: Math.min(this.itemGroup.items.length, 2.5)
        },
        [breakpoints.MD]: {
          slidesPerView: Math.min(this.itemGroup.items.length, 1.5)
        }
      }
    })
  },
  methods: {
    back() {
      this.$router.push({ name: 'chooseItemGroup' })
    },
    select(item) {
      this.$session.item = item
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
