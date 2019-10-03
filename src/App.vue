<template>
  <div id="app">
    <div class="beta-badge"></div>
    <SlideTransition :direction="slide">
      <router-view/>
    </SlideTransition>
    <IdleTime @timeout="start"/>
  </div>
</template>

<style lang="scss" src="@/assets/scss/app.scss">
</style>

<script>
import { IdleTime } from '@/components'
import { SlideTransition } from '@/transitions'

export default {
  name: 'app',
  components: {
    IdleTime,
    SlideTransition
  },
  async mounted() {
    const app = await this.$app.info()

    if (process.env.VUE_APP_VERSION !== app.version) {
      this.$delay(() => this.updateAvailable())
    } else {
      if (this.$session.started) return
      this.$delay(() => this.start())
    }
  },
  data() {
    return {
      slide: 'left'
    }
  },
  methods: {
    start() {
      if (this.$route.name === 'updateAvailable') return
      if (this.$route.name === 'start') return

      this.$router.push({ name: 'start' })
    },
    updateAvailable() {
      if (this.$route.name === 'updateAvailable') return
      this.$router.push({ name: 'updateAvailable' })
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
