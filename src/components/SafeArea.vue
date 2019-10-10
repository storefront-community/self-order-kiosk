<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'safeArea',
  mounted() {
    this.cover()
    $(window).on('resize', () => this.cover())
  },
  methods: {
    cover() {
      $('html').css('height', window.innerHeight)
      $('body').css('height', window.innerHeight)
      $('.app').css('height', window.innerHeight)

      $(window).scrollTop(0);
    }
  }
}
</script>
