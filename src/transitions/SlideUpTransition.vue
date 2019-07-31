<template>
  <transition-group @enter="enter" @leave="leave" appear>
    <slot></slot>
  </transition-group>
</template>

<script>
import { TweenMax, Power4, TimelineMax } from "gsap/TweenMax"

export default {
  name: 'slideUpTransition',
  props: {
    delayEnter: {
      type: Number,
      default: () => 0
    },
    delayLeave: {
      type: Number,
      default: () => 0
    }
  },
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
        delay: this.delayEnter,
        y: 0,
        ease: Power4.easeOut
      })

      timeLineMax.to(el, 1, {
        delay: this.delayEnter,
        scale: 1,
        ease: Power4.easeOut
      })
    },
    leave(el, done) {
      TweenMax.to(el, 1, {
        delay: this.delayLeave,
        y: window.innerHeight * -1.5,
        ease: Power4.easeOut,
        onComplete: done
      })
    }
  }
}
</script>
