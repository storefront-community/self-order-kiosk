<template>
  <transition @enter="enter" @leave="leave" appear>
    <slot></slot>
  </transition>
</template>

<script>
import { TweenMax, Power4, TimelineMax } from "gsap/TweenMax"

export default {
  name: 'slideUpTransition',
  methods: {
    enter(el, done) {
      const timeLineMax = new TimelineMax({
        onComplete: done
      })

      timeLineMax.set(el, {
        y: window.innerWidth * 1.5,
        scale: 0.8,
        transformOrigin: '50% 50%'
      })

      timeLineMax.to(el, 0.5, {
        y: 0,
        ease: Power4.easeOut
      })

      timeLineMax.to(el, 1, {
        scale: 1,
        ease: Power4.easeOut
      })
    },
    leave(el, done) {
      TweenMax.to(el, 1, {
        y: window.innerHeight * -1.5,
        ease: Power4.easeOut,
        onComplete: done
      })
    }
  }
}
</script>
