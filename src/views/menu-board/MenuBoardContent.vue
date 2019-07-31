<template>
  <div class="menu-board-content">
    <h2>
      {{ page.title }}
    </h2>
    <h3>
      <sup>$</sup>
      {{ page.price }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'menuBoardContent',
  props: ['page']
}
</script>
