<template>
  <component :is="transitionComponent()">
    <slot></slot>
  </component>
</template>

<script>
import FadeTransition from '@/transitions/FadeTransition'
import FlipXTransition from '@/transitions/FlipXTransition'
import FlipYTransition from '@/transitions/FlipYTransition'
import SlideTransition from '@/transitions/SlideTransition'
import SlideUpTransition from '@/transitions/SlideUpTransition'

export default {
  name: 'backgroundTransition',
  methods: {
    transitionComponent() {
      const transitions = [
        FadeTransition,
        FlipXTransition,
        FlipYTransition,
        SlideTransition,
        SlideUpTransition
      ]

      const current = Math.floor(Math.random() * transitions.length)

      return transitions[current]
    }
  }
}
</script>
