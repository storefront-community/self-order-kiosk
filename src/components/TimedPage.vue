<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'timedPage',
  mounted() {
    this.idleSeconds = 0
    this.interval = setInterval(() => this.incrementIdleMinutes(), 1000)

    $(document).on('mousemove keypress', () => {
      this.idleSeconds = 0
    })
  },
  destroyed() {
    clearInterval(this.interval)
  },
  methods: {
    incrementIdleMinutes() {
      if (++this.idleSeconds >= 60) {
        this.$router.push({ name: 'newOrder' })
      }
    }
  }
}
</script>
