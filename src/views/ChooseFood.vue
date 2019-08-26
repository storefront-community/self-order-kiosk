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
      <div ref="swiper" class="container swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="food in foods" :key="food.id">
            <FoodButton :food="food" @click="select(food)" />
          </div>
        </div>
      </div>
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
import Swiper from 'swiper'
import FoodButton from './partials/FoodButton'

export default {
  name: 'chooseFood',
  components: {
    FoodButton
  },
  data() {
    return {
      category: this.$session.category,
      foods: []
    }
  },
  async mounted() {
    if (!this.$session.started) return

    this.foods = await this.$api.items.list(this.$session.category.id)

    this.$nextTick(() => {
      new Swiper(this.$refs.swiper, {
        slidesPerView: 3,
        spaceBetween: 30,
        direction: 'horizontal'
      })
    })
  },
  methods: {
    back() {
      this.$router.push({ name: 'chooseCategory' })
    },
    select(food) {
      this.$session.item = food
      this.$router.push({ name: 'customizeFood' })
    }
  }
}
</script>
