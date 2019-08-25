<template>
  <form class="app-body" v-if="$session.started">
    <div class="app-content">
      <div class="container">
        <p class="text-center text-primary mb-4">
          <i class="fa fa-4x fa-times-circle"></i><br>
        </p>
        <p class="display-4 text-center">
          Cancel order?
        </p>
        <p class="text-center">
          Your order will be permanently canceled. We can't undo this.
        </p>
      </div>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="button" class="btn btn-primary btn-lg mr-auto" @click="neverMind">
          No, do not cancel
        </button>
        <button type="button" class="btn btn-outline-primary btn-lg ml-auto" @click="cancel">
          Yes, cancel order
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'orderComplete',
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.previousRoute = from.name
    })
  },
  data() {
    return {
      previousRoute: null
    }
  },
  methods: {
    cancel() {
      this.$router.push({ name: 'start' })
    },
    neverMind() {
      this.$router.push({ name: this.previousRoute })
    }
  }
}
</script>
