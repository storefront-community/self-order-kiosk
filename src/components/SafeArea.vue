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
      document.body.style.height = `${window.innerHeight}px`
      document.body.style.width = `${window.innerWidth}px`

      this.$el.style.height = `${window.innerHeight}px`
      this.$el.style.width = `${window.innerWidth}px`

      this.scrollTop()
    },
    scrollTop() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>
