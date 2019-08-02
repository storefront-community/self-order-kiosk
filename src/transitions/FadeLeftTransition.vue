<template>
  <transition @enter="enter" @leave="leave" mode="out-in" appear>
    <slot></slot>
  </transition>
</template>

<script>
import { TweenMax, Power4 } from "gsap/TweenMax"

export default {
  name: 'fadeInTransition',
  methods: {
    enter(el, done) {
      TweenMax.fromTo(el, .25, {
        autoAlpha: 0,
        xPercent: -10
      }, {
        autoAlpha: 1,
        delay: .1,
        xPercent: 0,
        ease: Power4.easeIn,
        onComplete: done
      })
    },
    leave(el, done) {
      TweenMax.fromTo(el, .25, {
        autoAlpha: 1,
        xPercent: 0
      }, {
        autoAlpha: 0,
        xPercent: -10,
        ease: Power4.easeIn,
        onComplete: done
      })
    }
  }
}
</script>
