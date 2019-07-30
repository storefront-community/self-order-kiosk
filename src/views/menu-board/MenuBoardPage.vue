<template>
  <div class="menu-board-content"></div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'menuBoardPage',
  props: ['content'],
  mounted() {
    $(this.$el).css("background-image", `url(${this.content.imageUrl})`)
  }
}
</script>
