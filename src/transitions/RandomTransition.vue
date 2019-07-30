<template>
  <component :is="transitionComponent()">
    <slot></slot>
  </component>
</template>

<script>
import FadeTransition from './FadeTransition'
import FlipXTransition from './FlipXTransition'
import FlipYTransition from './FlipYTransition'
import SlideTransition from './SlideTransition'
import SlideUpTransition from './SlideUpTransition'
import ZoomTransition from './ZoomTransition'

export default {
  name: 'randomTransition',
  methods: {
    transitionComponent() {
      const transitions = [
        FadeTransition,
        FlipXTransition,
        FlipYTransition,
        SlideTransition,
        SlideUpTransition,
        ZoomTransition
      ]

      const current = Math.floor(Math.random() * transitions.length)

      return transitions[current]
    }
  }
}
</script>
