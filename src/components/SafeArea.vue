<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'safeArea',
  mounted() {
    this.cover()
    window.addEventListener('resize', this.cover)
  },
  methods: {
    cover() {
      const height = `${this.$device.screen.safeArea.height()}px`
      const width = `${this.$device.screen.safeArea.width()}px`

      document.body.style.height = height
      document.body.style.width = width

      this.$el.style.height = height
      this.$el.style.width = width

      this.scrollTop()
    },
    scrollTop() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>
