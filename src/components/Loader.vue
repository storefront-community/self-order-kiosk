<template>
  <div class="loader">
    <div ref="salad" class="circle circle-salad"></div>
    <div ref="ketchup" class="circle circle-ketchup"></div>
    <div ref="mustard" class="circle circle-mustard"></div>
  </div>
</template>

<script>
import { TweenMax, Elastic } from "gsap/TweenMax"

export default {
  name: 'loader',
  mounted () {
    const duration = .9

    const options = {
      yoyo: true,
      repeat: -1,
      repeatDelay: 1,
      ease: Elastic.easeIn.config(1.1, 0.4),
      borderRadius: '12px',
      height: '36px',
      width: '36px'
    }

    const salad = { transform: 'translate(24px, -18px)' }
    const ketchup = { transform: 'translate(-18px, 22px)' }
    const mustard = { transform: 'translate(-22px, -18px)' }

    TweenMax.to(this.$refs.salad, duration, Object.assign(salad, options))
    TweenMax.to(this.$refs.ketchup, duration, Object.assign(ketchup, options))
    TweenMax.to(this.$refs.mustard, duration, Object.assign(mustard, options))
  }
}
</script>
