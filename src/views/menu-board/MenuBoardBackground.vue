<template>
  <div class="menu-board-background"></div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'menuBoardPage',
  props: ['page'],
  mounted() {
    const black = 'rgba(0, 0, 0, .5)'
    const transparent = 'rgba(0, 0, 0, 0)'
    const gradient = `linear-gradient(to bottom, ${black}, ${transparent})`

    $(this.$el).css({
      backgroundImage: `${gradient}, url(${this.page.background})`
    })
  }
}
</script>
