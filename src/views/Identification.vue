<template>
  <div class="container container-identification d-flex flex-column">
    <Logo size="large" class="mb-5"/>
    <p class="mb-5">
      Hello! Welcome :)
    </p>
    <form>
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
      <div class="d-flex mt-5">
        <button type="submit" class="btn btn-primary btn-lg ml-auto">
          <span class="mr-3">Next</span>
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'identification',
  components: {
    Logo
  }
}
</script>
