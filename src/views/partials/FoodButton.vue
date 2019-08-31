<template>
  <ScaleTransition>
    <button type="button" class="card bg-transparent h-100" @click="$emit('click', food)">
      <img :src="food.imageUrl" class="card-img-top" :alt="food.name">
      <div class="card-body d-flex align-items-center">
        <div class="card-text">
          <div class="mb-2">{{ food.name }}</div>
          <div><Currency :amount="food.price"/></div>
        </div>
      </div>
    </button>
  </ScaleTransition>
</template>

<script>
import { Currency } from '@/components'
import ScaleTransition from '@/transitions/ScaleTransition'
import { Item } from '@/models'

export default {
  name: 'foodButton',
  props: {
    food: {
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
