<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'carousel',
  props: {
    vertical: {
      type: Boolean,
      default: () => false
    }
  },
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
        vertical: this.vertical,
        verticalSwiping: this.vertical,
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
