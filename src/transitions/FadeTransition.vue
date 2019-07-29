<template>
  <transition @enter="enter" @leave="leave" appear>
    <slot></slot>
  </transition>
</template>

<script>
import { TweenMax, Power4 } from "gsap/TweenMax"

export default {
  name: 'fadeTransition',
  methods: {
    enter(el, done) {
      TweenMax.fromTo(el, 1, {
        autoAlpha: 0,
        scale: 1.5
      }, {
        autoAlpha: 1,
        scale: 1,
        transformOrigin: '50% 50%',
        ease: Power4.easeOut,
        onComplete: done
      });
    },
    leave(el, done) {
      TweenMax.fromTo(el, 1, {
        autoAlpha: 1,
        scale: 1
      }, {
        autoAlpha: 0,
        scale: 0.8,
        ease: Power4.easeOut,
        onComplete: done
      });
    }
  }
}
</script>
