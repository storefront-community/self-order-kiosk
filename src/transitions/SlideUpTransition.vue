<template>
  <transition @enter="enter" @leave="leave" mode="out-in" appear>
    <slot></slot>
  </transition>
</template>

<script>
import { TweenMax, Power4 } from "gsap/TweenMax"

export default {
  name: 'slideUpTransition',
  methods: {
    enter(el, done) {
      TweenMax.fromTo(el, .2, {
        autoAlpha: 0,
        yPercent: 10
      }, {
        autoAlpha: 1,
        delay: .1,
        yPercent: 0,
        ease: Power4.easeIn,
        onComplete: done
      })
    },
    leave(el, done) {
      TweenMax.fromTo(el, .2, {
        autoAlpha: 1,
        yPercent: 0
      }, {
        autoAlpha: 0,
        yPercent: -10,
        ease: Power4.easeIn,
        onComplete: done
      })
    }
  }
}
</script>
