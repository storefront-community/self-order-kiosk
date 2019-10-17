<template>
  <div class="d-flex flex-column w-100">
    <div class="d-flex align-items-center mb-3">
      <button type="button" class="btn btn-outline-primary btn-rounded" @click="decrement">
        <FontAwesome icon="minus" class="m-auto"/>
      </button>
      <div class="counter mx-2">
        <div class="rounded-clipping">
          <ProgressiveImage :image="item" :alt="item.name" :autoload="true"/>
        </div>
        <div class="rounded-count">
          <span class="mx-auto">
            {{ item.quantity }}
          </span>
        </div>
      </div>
      <button type="button" class="btn btn-outline-primary btn-rounded" @click="increment">
        <FontAwesome icon="plus" class="m-auto"/>
      </button>
      <div class="text-right font-weight-bold ml-auto">
        <Currency :amount="item.total()"/>
      </div>
    </div>
    <div class="mb-1 font-weight-bold">
      {{ item.name }}
    </div>
    <small>
      {{ options }}
    </small>
  </div>
</template>

<script>
import { Item } from '@/models'

export default {
  name: 'orderItemCard',
  props: {
    item: {
      type: Item,
      required: true
    }
  },
  methods: {
    decrement() {
      this.session.order.decrement(this.item)
    },
    increment() {
      this.session.order.increment(this.item)
    }
  },
  computed: {
    options() {
      return this.item.options().map(option => option.name.toLowerCase()).join(', ')
    }
  }
}
</script>
