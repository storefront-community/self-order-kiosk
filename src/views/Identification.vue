<template>
  <form class="app-body" @submit.prevent="next" v-if="$session.started">
    <div class="app-content">
      <div class="container container-sm d-flex flex-column">
        <p class="mb-5">
          We will only use this information to contact you if necessary.
        </p>
        <div class="mb-4">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="lni-user ml-3"></i>
              </span>
            </div>
            <input type="text" class="form-control form-control-lg border-left-0" placeholder="Your name"
              v-model="order.name" maxlength="20">
          </div>
        </div>
        <div class="mb-4">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="lni-mobile ml-3"></i>
              </span>
            </div>
            <input type="text" class="form-control form-control-lg border-left-0" placeholder="Mobile number"
              v-model="order.mobile" maxlength="20">
          </div>
        </div>
      </div>
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
export default {
  name: 'identification',
  data() {
    return {
      order: this.$session.order
    }
  },
  methods: {
    back() {
      this.$router.push({ name: 'eatLocation' })
    },
    next() {
      this.$router.push({ name: 'orderComplete' })
    }
  }
}
</script>
