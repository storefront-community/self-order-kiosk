<template>
  <component :is="transitionComponent()" :delayEnter="1" @leave="noop">
    <slot></slot>
  </component>
</template>

<script>
import FadeTransition from '@/transitions/FadeTransition'
import FlipXTransition from '@/transitions/FlipXTransition'
import FlipYTransition from '@/transitions/FlipYTransition'

export default {
  name: 'backgroundTransition',
  methods: {
    noop() {},
    transitionComponent() {
      const transitions = [
        FadeTransition,
        FlipXTransition,
        FlipYTransition
      ]

      const current = Math.floor(Math.random() * transitions.length)

      return transitions[current]
    }
  }
}
</script>
