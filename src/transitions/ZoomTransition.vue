<template>
  <transition-group @enter="enter" @leave="leave" appear>
    <slot></slot>
  </transition-group>
</template>

<script>
import { TweenMax, Power4, TimelineMax } from "gsap/TweenMax"

export default {
  name: 'zoomTransition',
  props: {
    delayEnter: {
      type: Number,
      default: 0
    },
    delayLeave: {
      type: Number,
      default: 0
    }
  },
  methods: {
    enter(el, done) {
      const timeLineMax = new TimelineMax({
        onComplete: done
      })

      timeLineMax.set(el, {
        autoAlpha: 0,
        scale: 2,
        transformOrigin: '50% 50%'
      })

      timeLineMax.to(el, 1, {
        delay: this.delayEnter,
        autoAlpha: 1,
        scale: 1,
        ease: Power4.easeOut
      })
    },
    leave(el, done) {
      TweenMax.to(el, 1, {
        delay: this.delayLeave,
        scale: 0,
        ease: Power4.easeOut,
        onComplete: done
      })
    }
  }
}
</script>
