<template>
  <div id="app">
    <ScreenTransition :direction="slide">
      <router-view/>
    </ScreenTransition>
  </div>
</template>

<style lang="scss" src="@/assets/scss/app.scss">
</style>

<script>
import ScreenTransition from '@/transitions/ScreenTransition'

export default {
  name: 'app',
  components: {
    ScreenTransition
  },
  data() {
    return {
      slide: 'left'
    }
  },
  watch: {
    $route(to, from) {
      const foward = to.meta.step > from.meta.step
      this.slide = foward ? 'left' : 'right'
    }
  }
}
</script>
