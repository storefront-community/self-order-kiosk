<template>
  <transition @enter="enter" @leave="leave" appear>
    <slot></slot>
  </transition>
</template>

<script>
import { TweenMax, Power4, TimelineMax } from "gsap/TweenMax"

export default {
  name: 'flipYTransition',
  methods: {
    enter(el, done) {
      const timeLineMax = new TimelineMax({
        onComplete: done
      })

      timeLineMax.set(el, {
        autoAlpha: 0,
        rotationY: 90,
        transformOrigin: '50% 50%'
      })

      timeLineMax.to(el, 1, {
        autoAlpha: 1,
        rotationY: 0,
        ease: Power4.easeOut
      })
    },
    leave(el, done) {
      TweenMax.to(el, 1, {
        scale: 0,
        ease: Power4.easeOut,
        onComplete: done
      })
    }
  }
}
</script>
