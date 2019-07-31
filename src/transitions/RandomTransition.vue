<template>
  <component
    :is="transitionComponent()"
    :delayEnter="delayEnter"
    :delayLeave="delayLeave">
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
