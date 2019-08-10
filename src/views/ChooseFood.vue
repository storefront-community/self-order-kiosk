<template>
  <form class="app-body" @submit.prevent="add" v-if="order">
    <div class="app-header">
      <div class="container">
        <h1 class="display-3 text-center">
          What would you like today?
        </h1>
      </div>
    </div>
    <div class="app-content">
      <div class="container">
        <FoodTransition ref="carousel">
          <div class="d-flex" v-for="item in items" :key="item.id">
            <button type="button" class="card bg-transparent flex-grow-1" @click="add(item)">
              <img :src="item.imageUrl" class="card-img-top" :alt="item.name">
              <div class="card-body d-flex flex-column">
                <p class="card-title flex-grow-1">
                  {{ item.name }}
                </p>
                <p class="card-text text-right">
                  <small><sup>$</sup></small>
                  {{ item.price | numeral }}
                </p>
              </div>
            </button>
          </div>
        </FoodTransition>
      </div>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="button" class="btn btn-outline-primary btn-lg mr-auto" @click="cancelOrder">
          Cancel order
        </button>
        <div class="ml-auto px-3 py-3 text-right text-primary">
          Swipe to navigate and tap to select
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import $ from 'jquery'
import { orderPropMixin, cancelOrderMixin } from '@/mixins'
import FoodTransition from '@/transitions/FoodTransition'

export default {
  name: 'chooseFood',
  mixins: [
    orderPropMixin,
    cancelOrderMixin
  ],
  data() {
    return {
      isSliding: false,
      items: []
    }
  },
  async mounted() {
    this.catalog = await this.$api.catalog.load()
    this.items = this.catalog.itemGroups[0].items

    this.$nextTick(() => {
      $(this.$refs.carousel.$el).slick({
        arrows: false,
        dots: false,
        infinite: false,
        rows: 1,
        slidesToShow: 3,
        slidesToScroll: 3
      })
      .on('beforeChange', () => {
        this.isSliding = true;
      })
      .on('afterChange', () => {
        this.isSliding = false;
      })
    })
  },
  methods: {
    add() {
      if (this.isSliding) return
      const params = { order: this.order }
      this.$router.push({ name: 'customizeFood', params })
    }
  },
  components: {
    FoodTransition
  }
}
</script>
