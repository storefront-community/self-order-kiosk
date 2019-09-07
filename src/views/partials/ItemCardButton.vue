<template>
  <ScaleTransition>
    <button type="button" class="card bg-transparent h-100" @click="$emit('click', item)">
      <img :src="item.imageUrl" class="card-img-top" :alt="item.name">
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
import { Currency } from '@/components'
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
    ScaleTransition
  },
}
</script>
