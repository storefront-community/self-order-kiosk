<template>
  <transition @enter="enter" @leave="leave" mode="out-in" appear>
    <slot></slot>
  </transition>
</template>

<script>
import { TweenMax, Power4 } from "gsap/TweenMax"

export default {
  name: 'screenTransition',
  props: {
    direction: {
      type: String,
      required: true,
      validator(value) {
        return ['left', 'right'].includes(value)
      }
    }
  },
  methods: {
    enter(el, done) {
      TweenMax.fromTo(el, .2, {
        autoAlpha: 0,
        xPercent: this.direction === 'left' ? 10 : -10
      }, {
        autoAlpha: 1,
        delay: .1,
        xPercent: 0,
        ease: Power4.easeIn,
        onComplete: done
      })
    },
    leave(el, done) {
      TweenMax.fromTo(el, .2, {
        autoAlpha: 1,
        xPercent: 0
      }, {
        autoAlpha: 0,
        xPercent: this.direction === 'left' ? -10 : 10,
        ease: Power4.easeIn,
        onComplete: done
      })
    }
  }
}
</script>
