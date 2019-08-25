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
      <div ref="swiper" class="container swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="category in categories" :key="category.id">
            <Category :category="category" @click="select(category)" />
          </div>
        </div>
      </div>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="button" class="btn btn-outline-primary btn-lg mr-auto" @click="cancelOrder">
          Cancel order
        </button>
        <div class="ml-auto px-3 py-3 text-right text-primary">
          Tap to select
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import Swiper from 'swiper';
import Category from './partials/Category'

export default {
  name: 'chooseCategory',
  components: {
    Category
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

    this.$nextTick(() => {
      new Swiper(this.$refs.swiper, {
        slidesPerView: 3,
        spaceBetween: 30,
        direction: 'horizontal'
      })
    })
  },
  methods: {
    cancelOrder() {
      this.$router.push({ name: 'cancelOrder' })
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
