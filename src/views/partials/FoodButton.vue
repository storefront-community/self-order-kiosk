<template>
  <ScaleTransition>
    <button type="button" class="card bg-transparent h-100" @click="$emit('click', food)">
      <img :src="food.imageUrl" class="card-img-top" :alt="food.name">
      <div class="card-body d-flex flex-column">
        <p class="card-title flex-grow-1">
          {{ food.name }}
        </p>
        <p class="card-text text-right">
          <Currency :amount="food.price"/>
        </p>
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
