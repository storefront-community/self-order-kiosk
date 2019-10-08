<template>
  <div class="card h-100">
    <div class="card-body d-block d-md-flex">
      <div class="rounded-clipping mr-3 flex-shrink-0">
        <ProgressiveImage :image="item" :alt="item.name" :autoload="true"/>
      </div>
      <div class="flex-grow-1">
        <div class="d-flex font-weight-bold py-3">
          <span>
            {{ item.name }}
          </span>
          <span class="ml-auto">
            <Currency :amount="item.price"/>
          </span>
        </div>
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
      <button type="button" class="btn btn-outline-primary btn-rounded d-flex justify-content-center" @click="decrement">
        <FontAwesome icon="minus" class="m-auto"/>
      </button>
      <span class="mx-3">
        {{ item.quantity }}
      </span>
      <button type="button" class="btn btn-outline-primary btn-rounded d-flex justify-content-center" @click="increment">
        <FontAwesome icon="plus" class="m-auto"/>
      </button>
      <div class="text-primary text-right font-weight-bold m-0 ml-auto">
        <Currency :amount="item.total()"/>
      </div>
    </div>
  </div>
</template>

<script>
import { Currency, ProgressiveImage } from '@/components'
import { Item } from '@/models'

export default {
  name: 'orderItemCard',
  props: {
    item: {
      type: Item,
      required: true
    }
  },
  components: {
    Currency,
    ProgressiveImage
  },
  methods: {
    increment() {
      this.session.order.increment(this.item)
    },
    decrement() {
      this.session.order.decrement(this.item)
    }
  }
}
</script>
