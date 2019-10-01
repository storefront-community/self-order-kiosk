<template>
  <ScaleTransition>
    <button type="button" class="card border-0 bg-transparent align-items-center w-100"
      @click="$emit('click', itemGroup)">
      <div class="rounded-clipping rounded-clipping-lg">
        <img :src="itemGroup.imageUrl" class="card-img-top" :alt="itemGroup.name">
      </div>
      <div class="card-body d-flex flex-column">
        <h2 class="card-title flex-grow-1 text-center font-weight-normal">
          {{ itemGroup.name }}
        </h2>
      </div>
    </button>
  </ScaleTransition>
</template>

<script>
import { ScaleTransition } from '@/transitions'
import { ItemGroup } from '@/models'

export default {
  name: 'itemGroupButton',
  props: {
    itemGroup: {
      type: ItemGroup,
      required: true
    }
  },
  components: {
    ScaleTransition
  },
}
</script>
