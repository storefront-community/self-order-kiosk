<template>
  <form class="app-body" @submit.prevent="next">
    <div class="app-header">
      <Logo class="mr-3"/>
      <h1>Storefront Community</h1>
    </div>
    <div class="app-content">
      <div class="container container-sm d-flex flex-column">
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
                <i class="lni-user ml-3"></i>
              </span>
            </div>
            <input type="text" class="form-control form-control-lg border-left-0" placeholder="Your name">
          </div>
        </div>
        <div class="mb-4">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="lni-mobile ml-3"></i>
              </span>
            </div>
            <input type="text" class="form-control form-control-lg border-left-0" placeholder="Mobile number">
          </div>
        </div>
      </div>
    </div>
    <div class="app-footer">
      <div class="container d-flex">
        <button type="submit" class="btn btn-primary btn-lg ml-auto">
          <span class="mr-4">Next</span>
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'identification',
  methods: {
    next() {
      this.$router.push({ name: 'chooseFood' })
    }
  },
  components: {
    Logo
  }
}
</script>
