<template>
  <div class="card h-100">
    <div class="card-body d-flex flex-column flex-md-row">
      <div class="rounded-clipping mr-3 flex-shrink-0">
        <ProgressiveImage :image="item" :alt="item.name" :autoload="true"/>
      </div>
      <div class="d-flex flex-column flex-grow-1">
        <div class="d-flex font-weight-bold py-3">
          <span>
            {{ item.name }}
          </span>
          <span class="ml-auto">
            <Currency :amount="item.price"/>
          </span>
        </div>
        <div ref="swiper" class="container swiper-container flex-grow-1">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="option in options" :key="option.id">
              <div class="d-flex border-bottom border-bottom-dashed">
                <span>
                  {{ option.name }}
                </span>
                <span class="ml-auto">
                  <Currency :amount="option.price"/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer border-top-0 d-flex align-items-center">
      <button type="button" class="btn btn-outline-primary btn-rounded d-flex justify-content-center" @click="decrement">
        <FontAwesome icon="minus" class="m-auto"/>
      </button>
      <span class="mx-3">
        {{ item.quantity }}
      </span>
      <button type="button" class="btn btn-outline-primary btn-rounded d-flex justify-content-center" @click="increment">
        <FontAwesome icon="plus" class="m-auto"/>
      </button>
      <div class="text-primary text-right font-weight-bold m-0 ml-auto">
        <Currency :amount="item.total()"/>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import { Currency, ProgressiveImage } from '@/components'
import { Item } from '@/models'

export default {
  name: 'orderItemCard',
  props: {
    item: {
      type: Item,
      required: true
    }
  },
  components: {
    Currency,
    ProgressiveImage
  },
  mounted() {
    this.$nextTick(() => this.initSwipeGesture())
  },
  methods: {
    increment() {
      this.session.order.increment(this.item)
    },
    decrement() {
      this.session.order.decrement(this.item)
    },
    initSwipeGesture() {
      if (!this.$refs.swiper) return

      const swiper = new Swiper(this.$refs.swiper, {
        slidesPerView: this.slidesPerView(),
        centeredSlides: false,
        direction: 'vertical',
        nested: true
      })

      window.addEventListener('resize', () => {
        swiper.params.slidesPerView = this.slidesPerView()
        swiper.update()
      })
    },
    slidesPerView() {
      if (this.$device.screen.safeArea.height() >= 1280) return 11.25
      else if (this.$device.screen.safeArea.height() >= 960) return 8.25
      else if (this.$device.screen.safeArea.height() >= 800) return 7.25
      else if (this.$device.screen.safeArea.height() >= 640) return 5.25
      else return 3.25
    }
  },
  computed: {
    options() {
      return this.item.options()
    }
  }
}
</script>
