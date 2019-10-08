<template>
  <SafeArea :class="`app theme-${session.theme}`">
    <form class="app-body" @submit.prevent="add" v-if="session.started">
      <div class="app-header">
        <div class="container">
          <div class="text-center">
            <span v-if="orderHasItem">
              {{ $t('title_with_items') }}
            </span>
            <span v-else>
              {{ $t('title_without_items') }}
            </span>
          </div>
        </div>
      </div>
      <div class="app-content">
        <SwiperContainer ref="swiper">
          <SwiperSlide v-for="itemGroup in itemGroups" :key="itemGroup.id">
            <ItemGroupButton ref="itemGroupButton" :itemGroup="itemGroup"
              @click="select(itemGroup)" @imagePreload="loadImages"/>
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
import ItemGroupButton from './partials/ItemGroupButton'
import breakpoints from '@/constants/breakpoints'

export default {
  name: 'chooseItemGroup',
  components: {
    ItemGroupButton,
    SafeArea,
    SwiperContainer,
    SwiperSlide
  },
  data() {
    return {
      itemGroups: []
    }
  },
  async mounted() {
    if (!this.session.started) return

    this.itemGroups = await this.$api.itemGroups.list()

    if (!this.$refs.swiper) return

    this.$refs.swiper.init({
      slidesPerView: Math.min(this.itemGroups.length, 3.5),
      centeredSlides: false,
      spaceBetween: 30,
      direction: 'horizontal',
      shadowEnabled: this.itemGroups.length > 3,
      breakpoints: {
        [breakpoints.MD]: {
          slidesPerView: Math.min(this.itemGroups.length, 2.5)
        },
        [breakpoints.SM]: {
          slidesPerView: Math.min(this.itemGroups.length, 1.75),
          centeredSlides: true
        }
      }
    })
  },
  methods: {
    back() {
      const routeName = this.orderHasItem ? 'orderSummary' : 'startOrder'
      this.$router.push({ name: routeName })
    },
    loadImages() {
      const preloading = this.$refs.itemGroupButton
        .map(button => button.image.preloading)
        .includes(true)

      if (preloading) return

      this.$refs.itemGroupButton.forEach(button => button.image.load())
    },
    select(itemGroup) {
      this.session.itemGroup = itemGroup
      this.$router.push({ name: 'chooseItem' })
    }
  },
  computed: {
    orderHasItem() {
      return !!this.session.order.items.length
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
