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
    }
  }
}
</script>
