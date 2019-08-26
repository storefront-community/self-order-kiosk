<template>
  <span>
    <small><sup>$</sup></small>{{ amount | numeral }}
  </span>
</template>

<script>
export default {
  name: 'currency',
  props: {
    amount: {
      type: Number,
      default: () => 0
    }
  }
}
</script>
