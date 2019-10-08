<template>
  <SafeArea :class="`app theme-${theme}`">
    <div class="beta-badge"></div>
    <SlideTransition :direction="slide">
      <router-view/>
    </SlideTransition>
  </SafeArea>
</template>

<style lang="scss" src="@/assets/scss/app.scss">
</style>

<script>
import { SafeArea } from '@/components'
import { SlideTransition } from '@/transitions'

export default {
  name: 'app',
  components: {
    SafeArea,
    SlideTransition
  },
  data() {
    return {
      slide: 'left',
      theme: 'default' // 'loading'
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
