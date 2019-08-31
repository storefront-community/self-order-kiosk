<template>
  <div id="app">
    <div class="beta-badge"></div>
    <SlideTransition :direction="slide">
      <router-view/>
    </SlideTransition>
  </div>
</template>

<style lang="scss" src="@/assets/scss/app.scss">
</style>

<script>
import SlideTransition from '@/transitions/SlideTransition'
import waitTransition from '@/hacks/waitTransition'

export default {
  name: 'app',
  components: {
    SlideTransition
  },
  mounted() {
    this.$i18n.locale = /br/i.test(navigator.language) ? 'br' : 'en';

    if (this.$session.started) return

    waitTransition(() => this.start())
  },
  data() {
    return {
      slide: 'left'
    }
  },
  methods: {
    start() {
      if (this.$route.name === 'start') return
      this.$router.push({ name: 'start' })
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
