<template>
  <form class="app-body" @submit.prevent="add" v-if="$session.started">
    <div class="app-header">
      <div class="container">
        <h1 class="display-3 py-2 text-center">
          {{ category.name }}
        </h1>
      </div>
    </div>
    <div class="app-content">
      <SwiperContainer ref="swiper">
        <SwiperSlide v-for="item in items" :key="item.id">
          <ItemCardButton :item="item" @click="select(item)" />
        </SwiperSlide>
      </SwiperContainer>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="button" class="btn btn-outline-primary btn-lg mr-auto" @click="back">
          <i class="fa fa-arrow-left"></i>
          <span class="ml-3">{{ $t('back') }}</span>
        </button>
        <div class="ml-auto p-3 text-right text-primary">
          {{ $t('tap_to_select') }}
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { SwiperContainer, SwiperSlide } from '@/components'
import ItemCardButton from './partials/ItemCardButton'

export default {
  name: 'chooseItem',
  components: {
    ItemCardButton,
    SwiperContainer,
    SwiperSlide
  },
  data() {
    return {
      category: this.$session.category,
      items: []
    }
  },
  async mounted() {
    if (!this.$session.started) return

    this.items = await this.$api.items.list(this.$session.category.id)

    if (!this.$refs.swiper) return

    this.$refs.swiper.init({
      slidesPerView: Math.min(this.items.length, 3.5),
      spaceBetween: 30,
      direction: 'horizontal',
      shadowEnabled: this.items.length > 3
    })
  },
  methods: {
    back() {
      this.$router.push({ name: 'chooseCategory' })
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