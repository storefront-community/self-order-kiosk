<template>
  <form class="app-body" @submit.prevent="add" v-if="$session.started">
    <div class="app-header">
      <div class="container">
        <h1 class="display-3 py-2 text-center">
          What <span v-if="orderHasItem">else</span> would you like today?
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
          <span class="ml-3">Back</span>
        </button>
        <div class="ml-auto px-3 py-3 text-right text-primary">
          Tap to select
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
    if (!this.$session.started) return

    this.categories = await this.$api.categories.list()

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
      this.$router.push({ name: 'chooseFood' })
    }
  },
  computed: {
    orderHasItem() {
      return !!this.$session.order.items.length
    }
  }
}
</script>
