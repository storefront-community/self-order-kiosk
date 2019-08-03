<template>
  <form class="screen" @submit.prevent="chooseFood">
    <div class="container d-flex flex-column">
      <h1 class="display-3 mb-4">
        Hi!
      </h1>
      <p class="mb-5">
        We will only use this information to contact you if necessary.
      </p>
      <div class="mb-4">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="lni-user"></i>
            </span>
          </div>
          <input type="text" class="form-control form-control-lg border-left-0" placeholder="Your name">
        </div>
      </div>
      <div class="mb-4">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="lni-mobile"></i>
            </span>
          </div>
          <input type="text" class="form-control form-control-lg border-left-0" placeholder="Mobile number">
        </div>
      </div>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="submit" class="btn btn-primary btn-lg ml-auto px-5 py-3">
          <span class="mr-4">Next</span>
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'identification',
  methods: {
    chooseFood() {
      this.$router.push({ name: 'chooseFood' })
    }
  }
}
</script>
