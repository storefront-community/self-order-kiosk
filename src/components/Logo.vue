<template>
  <img :src="imageUrl" class="logo">
</template>

<script>
export default {
  name: 'logo',
  props: ['size'],
  computed: {
    imageUrl() {
      return `${process.env.VUE_APP_API_BASE_URL}${this.$api.virtualPath}/gallery/logo.jpg`
    },
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
