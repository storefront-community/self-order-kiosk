<template>
  <transition-group @enter="enter" @leave="leave" appear>
    <slot></slot>
  </transition-group>
</template>

<script>
import { TweenMax, Power4 } from "gsap/TweenMax"

export default {
  name: 'fadeTransition',
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
      TweenMax.fromTo(el, 1, {
        autoAlpha: 0,
        scale: 1.5
      }, {
        delay: this.delayEnter,
        autoAlpha: 1,
        scale: 1,
        transformOrigin: '50% 50%',
        ease: Power4.easeOut,
        onComplete: done
      })
    },
    leave(el, done) {
      TweenMax.fromTo(el, 1, {
        autoAlpha: 1,
        scale: 1
      }, {
        delay: this.delayLeave,
        autoAlpha: 0,
        scale: 0.8,
        ease: Power4.easeOut,
        onComplete: done
      })
    }
  }
}
</script>
