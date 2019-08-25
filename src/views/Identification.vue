<template>
  <form class="app-body" @submit.prevent="next" v-if="$session.started">
    <div class="app-header">
      <div class="container">
        <h1 class="display-3 py-2 text-center">
          Please tell us your name so we can call you.
        </h1>
      </div>
    </div>
    <div class="app-content">
      <div class="container container-sm">
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="lni-user ml-3"></i>
              </span>
            </div>
            <div class="form-control form-control-lg border-left-0">
              {{ order.name }}_
            </div>
          </div>
        </div>
      </div>
      <Keyboard v-model="order.name" :maxlength="20"/>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="button" class="btn btn-outline-primary btn-lg mr-auto" @click="back">
          <i class="fa fa-arrow-left"></i>
          <span class="ml-3">Back</span>
        </button>
        <button type="submit" class="btn btn-primary btn-lg ml-auto">
          <i class="fa fa-check"></i>
          <span class="ml-3">Complete</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { Keyboard } from '@/components'

export default {
  name: 'identification',
  data() {
    return {
      order: this.$session.order
    }
  },
  components: {
    Keyboard
  },
  methods: {
    back() {
      this.$router.push({ name: 'eatLocation' })
    },
    next() {
      this.order.name = this.order.name.trim()
      this.$router.push({ name: 'orderComplete' })
    }
  }
}
</script>
