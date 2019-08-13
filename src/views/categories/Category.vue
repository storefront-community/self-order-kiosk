<template>
  <FoodTransition class="d-flex">
    <button type="button" class="card border-0 bg-transparent align-items-center flex-grow-1"
      @click="$emit('click', category)" :key="category.id">
      <div class="rounded-clipping rounded-clipping-lg">
        <img :src="category.imageUrl" class="card-img-top" :alt="category.name">
      </div>
      <div class="card-body d-flex flex-column">
        <h1 class="card-title display-3 flex-grow-1">
          {{ category.name }}
        </h1>
      </div>
    </button>
  </FoodTransition>
</template>

<script>
import FoodTransition from '@/transitions/FoodTransition'
import { Category } from '@/models'

export default {
  name: 'category',
  props: {
    category: {
      type: Category,
      required: true
    }
  },
  components: {
    FoodTransition
  },
}
</script>
