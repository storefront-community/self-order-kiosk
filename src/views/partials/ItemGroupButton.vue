<template>
  <ScaleTransition>
    <button type="button" class="btn btn-card border-0 align-items-center"
      @click="$emit('click', itemGroup)">
      <div class="rounded-clipping rounded-clipping-lg">
        <ProgressiveImage ref="image" :image="itemGroup" :alt="itemGroup.name" @preload="$emit('imagePreload')"/>
      </div>
      <div class="card-body d-flex flex-column">
        <p class="display-3 card-title flex-grow-1 text-center font-weight-normal">
          {{ itemGroup.name }}
        </p>
      </div>
    </button>
  </ScaleTransition>
</template>

<script>
import { ProgressiveImage } from '@/components'
import { ScaleTransition } from '@/transitions'
import { ItemGroup } from '@/models'

export default {
  name: 'itemGroupButton',
  props: {
    itemGroup: {
      type: ItemGroup,
      required: true
    }
  },
  components: {
    ProgressiveImage,
    ScaleTransition
  },
  computed: {
    image() {
      return this.$refs.image
    }
  }
}
</script>
