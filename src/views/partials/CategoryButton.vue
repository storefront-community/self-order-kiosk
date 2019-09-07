<template>
  <ScaleTransition>
    <button type="button" class="card border-0 bg-transparent align-items-center w-100"
      @click="$emit('click', category)">
      <div class="rounded-clipping rounded-clipping-lg">
        <img :src="category.imageUrl" class="card-img-top" :alt="category.name">
      </div>
      <div class="card-body d-flex flex-column">
        <h2 class="card-title flex-grow-1 text-center font-weight-normal">
          {{ category.name }}
        </h2>
      </div>
    </button>
  </ScaleTransition>
</template>

<script>
import { ScaleTransition } from '@/transitions'
import { Category } from '@/models'

export default {
  name: 'categoryButton',
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
