<template>
  <div class="card">
    <div class="card-body d-flex">
      <div class="rounded-clipping mr-4">
        <img :src="item.imageUrl">
      </div>
      <div class="flex-grow-1">
        <h5 class="d-flex py-3">
          <span>
            {{ item.name }}
          </span>
          <span class="ml-auto">
            <Currency :amount="item.price"/>
          </span>
        </h5>
        <div class="d-flex border-bottom border-bottom-dashed mb-3"
          v-for="option in item.options()" :key="option.id">
          <span>
            {{ option.name }}
          </span>
          <span class="ml-auto">
            <Currency :amount="option.price"/>
          </span>
        </div>
      </div>
    </div>
    <div class="card-footer border-top-0 d-flex align-items-center">
      <button type="button" class="btn btn-outline-primary" style="border-radius: 50%">
        <i class="fa fa-minus"></i>
      </button>
      <span class="mx-3">1</span>
      <button type="button" class="btn btn-outline-primary" style="border-radius: 50%">
        <i class="fa fa-plus"></i>
      </button>
      <h4 class="text-primary text-right m-0 ml-auto">
        <Currency :amount="item.total()"/>
      </h4>
    </div>
  </div>
</template>

<script>
import { Currency } from '@/components'
import { Item } from '@/models'

export default {
  name: 'orderItem',
  props: {
    item: {
      type: Item,
      required: true
    }
  },
  components: {
    Currency
  }
}
</script>
