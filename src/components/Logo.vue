<template>
  <img src="/img/storefront-community.svg" :height="height">
</template>

<script>
export default {
  name: 'logo',
  props: ['size'],
  computed: {
    height() {
      switch (this.size) {
        case 'x-large': return '92px'
        case 'large': return '64px'
        case 'medium': return '48px'
        default: return '32px'
      }
    }
  }
}
</script>
