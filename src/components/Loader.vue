<template>
  <div class="loader">
    <div class="circle circle-salad"></div>
    <div class="circle circle-ketchup"></div>
    <div class="circle circle-mustard"></div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'

export default {
  name: 'loader',
  mounted () {
    var borderRadius = '12px'
    var direction = 'alternate'
    var loop = true
    var elasticity = 400
    var easing = 'easeInElastic'
    var duration = 800
    var delay = 600
    var endDelay = 600
    var height = '36px'
    var width = '36px'

    anime ({
      targets: ['.circle-salad'],
      direction: direction,
      loop: loop,
      elasticity: elasticity,
      easing: easing,
      duration: duration,
      delay: delay,
      endDelay: endDelay,
      translateY: -18,
      translateX: 24,
      borderRadius: borderRadius,
      height: height,
      width: width
    })

    anime ({
      targets: ['.circle-ketchup'],
      direction: direction,
      loop: loop,
      elasticity: elasticity,
      easing: easing,
      duration: duration,
      delay: delay,
      endDelay: endDelay,
      translateY: 22,
      translateX: -18,
      borderRadius: borderRadius,
      height: height,
      width: width
    })

    anime ({
      targets: ['.circle-mustard'],
      direction: direction,
      loop: loop,
      elasticity: elasticity,
      easing: easing,
      duration: duration,
      delay: delay,
      endDelay: endDelay,
      translateY: -18,
      translateX: -22,
      borderRadius: borderRadius,
      height: height,
      width: width
    })
  }
}
</script>
