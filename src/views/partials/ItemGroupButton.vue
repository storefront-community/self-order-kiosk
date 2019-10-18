<template>
  <ScaleTransition>
    <div ref="wrapper" class="d-inline-flex align-items-center h-100">
      <button type="button" class="btn shadow-none p-0" @click="$emit('click', itemGroup)">
        <div ref="clipping" class="rounded-clipping">
          <ProgressiveImage ref="image" :image="itemGroup" :alt="itemGroup.name" @preload="$emit('imagePreload')"/>
        </div>
        <div class="font-weight-bold py-3 py-lg-5">
          {{ itemGroup.name }}
        </div>
      </button>
    </div>
  </ScaleTransition>
</template>

<script>
import { ItemGroup } from '@/models'

export default {
  name: 'itemGroupButton',
  props: {
    itemGroup: {
      type: ItemGroup,
      required: true
    }
  },
  created() {
    window.addEventListener('resize', () => this.resize())
  },
  mounted() {
    this.resize()
  },
  methods: {
    resize() {
      if (!this.$refs.clipping) return

      const width = this.$device.screen.safeArea.width()
      const height = this.$device.screen.safeArea.height()
      const safeArea = Math.min(width, height)
      const wrapper = this.$refs.wrapper.offsetHeight
      const size = Math.min(safeArea, wrapper) / 2

      this.$refs.clipping.style.width = `${size}px`
      this.$refs.clipping.style.height = `${size}px`
    }
  },
  computed: {
    image() {
      return this.$refs.image
    }
  }
}
</script>
