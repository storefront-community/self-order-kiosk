<template>
  <ScaleTransition>
    <button type="button" class="btn btn-card" @click="$emit('click', item)">
      <ProgressiveImage ref="image" :image="item" :alt="item.name" @preload="$emit('imagePreload')"
        class="card-img-top"/>
      <div class="card-body d-flex align-items-center">
        <div class="card-text">
          <div class="mb-2">
            {{ item.name }}
          </div>
          <Currency :amount="item.price"/>
        </div>
      </div>
    </button>
  </ScaleTransition>
</template>

<script>
import { Currency, ProgressiveImage } from '@/components'
import { ScaleTransition } from '@/transitions'
import { Item } from '@/models'

export default {
  name: 'itemCardButton',
  props: {
    item: {
      type: Item,
      required: true
    }
  },
  components: {
    Currency,
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
