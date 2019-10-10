<template>
  <transition @enter="enter" @leave="leave" mode="out-in" appear>
    <slot></slot>
  </transition>
</template>

<script>
import { TweenMax, Power4 } from "gsap/TweenMax"

export default {
  name: 'slideTransition',
  props: {
    direction: {
      type: [Function, String],
      default: () => 'left'
    }
  },
  methods: {
    getDirection() {
      return typeof this.direction === 'function' ? this.direction() : this.direction
    },
    enter(el, done) {
      TweenMax.fromTo(el, .2, {
        autoAlpha: 0,
        xPercent: this.getDirection() === 'left' ? 10 : -10
      }, {
        autoAlpha: 1,
        delay: .1,
        xPercent: 0,
        ease: Power4.easeIn,
        onComplete: () => {
          done()
          this.$emit('enter')
        }
      })
    },
    leave(el, done) {
      TweenMax.fromTo(el, .2, {
        autoAlpha: 1,
        xPercent: 0
      }, {
        autoAlpha: 0,
        xPercent: this.getDirection() === 'left' ? -10 : 10,
        ease: Power4.easeIn,
        onComplete: () => {
          done()
          this.$emit('leave')
        }
      })
    }
  }
}
</script>
