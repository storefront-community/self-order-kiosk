<template>
  <ScaleTransition class="d-flex">
    <button type="button" class="card bg-transparent flex-grow-1" @click="$emit('click', food)" :key="food.id">
      <img :src="food.imageUrl" class="card-img-top" :alt="food.name">
      <div class="card-body d-flex flex-column">
        <p class="card-title flex-grow-1">
          {{ food.name }}
        </p>
        <p class="card-text text-right">
          <small><sup>$</sup></small>
          {{ food.price | numeral }}
        </p>
      </div>
    </button>
  </ScaleTransition>
</template>

<script>
import ScaleTransition from '@/transitions/ScaleTransition'
import { Item } from '@/models'

export default {
  name: 'food',
  props: {
    food: {
      type: Item,
      required: true
    }
  },
  components: {
    ScaleTransition
  },
}
</script>
