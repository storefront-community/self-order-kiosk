<template>
  <transition-group @enter="enter" appear>
    <slot></slot>
  </transition-group>
</template>

<script>
import { Power4, TimelineMax } from "gsap/TweenMax"

export default {
  name: 'foodTransition',
  methods: {
    enter(el, done) {
      const timeLineMax = new TimelineMax({
        onComplete: done
      })

      timeLineMax.set(el, {
        autoAlpha: 0,
        scale: .2,
        transformOrigin: '50% 50%'
      })

      timeLineMax.to(el, .5, {
        delay: .25,
        autoAlpha: 1,
        scale: 1,
        ease: Power4.easeOut
      })
    }
  }
}
</script>
