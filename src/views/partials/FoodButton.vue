<template>
  <ScaleTransition>
    <button type="button" class="card bg-transparent h-100" @click="$emit('click', food)">
      <img :src="food.imageUrl" class="card-img-top" :alt="food.name">
      <div class="card-body d-flex flex-column">
        <div class="card-title flex-grow-1">
          {{ food.name }}
        </div>
        <div class="card-text">
          <Currency :amount="food.price"/>
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
