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
      default: () => 0
    },
    delayLeave: {
      type: Number,
      default: () => 0
    },
    transitions: {
      type: Array,
      default: () => [
        FadeTransition,
        FlipXTransition,
        FlipYTransition,
        SlideTransition,
        SlideUpTransition,
        ZoomTransition
      ]
    }
  },
  methods: {
    transitionComponent() {
      const random = Math.random() * this.transitions.length
      const current = Math.floor(random)

      return this.transitions[current]
    }
  }
}
</script>
