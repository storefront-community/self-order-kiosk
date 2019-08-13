<template>
  <div id="app">
    <SlideTransition :direction="slide">
      <router-view/>
    </SlideTransition>
  </div>
</template>

<style lang="scss" src="@/assets/scss/app.scss">
</style>

<script>
import SlideTransition from '@/transitions/SlideTransition'

export default {
  name: 'app',
  components: {
    SlideTransition
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
