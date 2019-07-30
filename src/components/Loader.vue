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
    var easing = Elastic.easeIn.config(1.1, 0.4)
    var duration = .7
    var delay = 1
    var borderRadius = '12px'
    var height = '36px'
    var width = '36px'

    TweenMax.to(this.$refs.salad, duration, {
      yoyo: true,
      repeat: -1,
      repeatDelay: delay,
      ease: easing,
      transform: 'translate(24px, -18px)',
      borderRadius: borderRadius,
      height: height,
      width: width
    })

    TweenMax.to(this.$refs.ketchup, duration, {
      yoyo: true,
      repeat: -1,
      repeatDelay: delay,
      ease: easing,
      transform: 'translate(-18px, 22px)',
      borderRadius: borderRadius,
      height: height,
      width: width
    })

    TweenMax.to(this.$refs.mustard, duration, {
      yoyo: true,
      repeat: -1,
      repeatDelay: delay,
      ease: easing,
      transform: 'translate(-22px, -18px)',
      borderRadius: borderRadius,
      height: height,
      width: width
    })
  }
}
</script>
