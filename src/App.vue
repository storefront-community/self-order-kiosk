<template>
  <SafeArea :class="`app theme-${theme}`">
    <div class="beta-badge"></div>
    <SlideTransition :direction="slide">
      <router-view/>
    </SlideTransition>
    <IdleTime @timeout="start"/>
  </SafeArea>
</template>

<style lang="scss" src="@/assets/scss/app.scss">
</style>

<script>
import { IdleTime } from '@/components'
import { SafeArea } from '@/components'
import { SlideTransition } from '@/transitions'

export default {
  name: 'app',
  components: {
    IdleTime,
    SafeArea,
    SlideTransition
  },
  beforeCreate() {
    this.$api.tenant = this.$route.params.tenant
  },
  async mounted() {
    const app = await this.$api.settings.get()

    this.theme = app.theme || 'default'

    if (!this.$version.isUpToDate(app.version)) {
      this.$delay(() => this.updateAvailable())
    } else {
      if (this.$session.started) return
      this.$delay(() => this.start())
    }
  },
  data() {
    return {
      slide: 'left',
      theme: 'loading'
    }
  },
  methods: {
    start() {
      if (this.$route.name === 'updateAvailable') return
      if (this.$route.name === 'startOrder') return

      this.$router.push({ name: 'startOrder' })
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
