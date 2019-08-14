<template>
  <ScaleTransition class="d-flex h-100">
    <button type="button" class="card border-0 bg-transparent align-items-center flex-grow-1"
      @click="$emit('click', category)">
      <div class="rounded-clipping rounded-clipping-lg">
        <img :src="category.imageUrl" class="card-img-top" :alt="category.name">
      </div>
      <div class="card-body d-flex flex-column">
        <h1 class="card-title display-3 flex-grow-1">
          {{ category.name }}
        </h1>
      </div>
    </button>
  </ScaleTransition>
</template>

<script>
import ScaleTransition from '@/transitions/ScaleTransition'
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
    ScaleTransition
  },
}
</script>
