<template>
  <div class="container swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'swiperContainer',
  methods: {
    init(options) {
      options.on = options.on || {}

      options.on.progress = (value) => {
        this.$el.classList.toggle('shadow-start', options.shadowEnabled && value > 0)
        this.$el.classList.toggle('shadow-end', options.shadowEnabled && value < 1)
      }

      this.$nextTick(() => new Swiper(this.$el, options))
    }
  }
}
</script>
