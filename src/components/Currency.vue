<template>
  <span>
    <small><sup>{{ symbol }}</sup></small>{{ amount | numeral(locale) }}
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
  },
  computed: {
    locale() {
      return this.$session.locale
    },
    symbol() {
      return this.locale === 'br' ? 'R$' : '$'
    }
  }
}
</script>
