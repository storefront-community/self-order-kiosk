<template>
  <div id="app">
    <div class="app-header">
      <Logo class="mr-3"/>
      <h1>Storefront Community</h1>
    </div>
    <SlideTransition :direction="slide">
      <router-view/>
    </SlideTransition>
  </div>
</template>

<style lang="scss" src="@/assets/scss/app.scss">
</style>

<script>
import Logo from '@/components/Logo'
import SlideTransition from '@/transitions/SlideTransition'

export default {
  name: 'selfServiceTerminal',
  components: {
    Logo,
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
