<template>
  <router-view/>
</template>

<style lang="scss" src="@/assets/scss/app.scss">
</style>

<script>
export default {
  name: 'app',
  beforeCreate() {
    this.$device.contextmenu.disable()
    this.$device.screen.zoom.disable()
  }
}
</script>
