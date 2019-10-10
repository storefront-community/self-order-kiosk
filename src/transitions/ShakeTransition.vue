<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
import { TweenMax } from "gsap/TweenMax"

export default {
  name: 'shakeTransition',
  data() {
    return {
      running: false
    }
  },
  methods: {
    run() {
      if (this.running) return

      TweenMax.to(this.$el, .1, {
        x: '-=7',
        yoyo: true,
        repeat: 3,
        onComplete: () => {
          this.running = false
        }
      })

      this.running = true
    }
  }
}
</script>
