<template>
  <form class="app-body" @submit.prevent="add" v-if="$session.started">
    <div class="app-header">
      <div class="container">
        <h1 class="display-3 py-2 text-center">
          <span v-if="orderHasItem">
            {{ $t('title_with_items') }}
          </span>
          <span v-else>
            {{ $t('title_without_items') }}
          </span>
        </h1>
      </div>
    </div>
    <div class="app-content">
      <SwiperContainer ref="swiper">
        <SwiperSlide v-for="category in categories" :key="category.id">
            <CategoryButton :category="category" @click="select(category)" />
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
import CategoryButton from './partials/CategoryButton'

export default {
  name: 'chooseCategory',
  components: {
    CategoryButton,
    SwiperContainer,
    SwiperSlide
  },
  data() {
    return {
      order: this.$session.order,
      categories: []
    }
  },
  async mounted() {
    this.$i18n.locale = this.$session.locale

    if (!this.$session.started) return

    this.categories = await this.$api.categories.list()

    if (!this.$refs.swiper) return

    this.$refs.swiper.init({
      slidesPerView: Math.min(this.categories.length, 3.5),
      spaceBetween: 30,
      direction: 'horizontal',
      shadowEnabled: this.categories.length > 3
    })
  },
  methods: {
    back() {
      const routeName = this.orderHasItem ? 'orderSummary' : 'start'
      this.$router.push({ name: routeName })
    },
    select(category) {
      this.$session.category = category
      this.$router.push({ name: 'chooseItem' })
    }
  },
  computed: {
    orderHasItem() {
      return !!this.$session.order.items.length
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
    "title_without_items": "O que você gostaria hoje?"
  },
  "en": {
    "back": "Back",
    "tap_to_select": "Tap to select",
    "title_with_items": "What else would you like today?",
    "title_without_items": "What would you like today?"
  }
}
</i18n>
