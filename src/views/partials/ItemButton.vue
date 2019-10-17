<template>
  <ScaleTransition>
    <button type="button" class="btn btn-card" @click="$emit('click', item)">
      <ProgressiveImage ref="image" :image="item" :alt="item.name" @preload="$emit('imagePreload')"/>
      <div class="p-3">
        <div class="mb-2">
          {{ item.name }}
        </div>
        <Currency :amount="item.price"/>
      </div>
    </button>
  </ScaleTransition>
</template>

<script>
import { Item } from '@/models'

export default {
  name: 'itemButton',
  props: {
    item: {
      type: Item,
      required: true
    }
  },
  computed: {
    image() {
      return this.$refs.image
    }
  }
}
</script>
