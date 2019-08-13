<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'carousel',
  data() {
    return {
      isSliding: false
    }
  },
  methods: {
    load() {
      $(this.$el).slick({
        arrows: false,
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        rows: 1
      })
      .on('beforeChange', () => {
        this.isSliding = true
      })
      .on('afterChange', () => {
        this.isSliding = false
      })
    }
  }
}
</script>
