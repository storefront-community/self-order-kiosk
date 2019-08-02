<template>
  <FadeRightTransition>
    <div class="screen">
      <div class="container container-identification d-flex flex-column">
        <Logo size="large" class="mb-5"/>
        <p class="mb-5">
          What would you like today?
        </p>
        <form>
          <div class="d-flex mt-5">
            <button type="button" class="btn btn-outline-primary btn-lg mr-auto" @click="back">
              <i class="fa fa-arrow-left"></i>
              <span class="ml-3">Back</span>
            </button>
            <button type="submit" class="btn btn-primary btn-lg ml-auto">
              <span class="mr-3">Next</span>
              <i class="fa fa-arrow-right"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </FadeRightTransition>
</template>

<script>
import Logo from '@/components/Logo'
import { FadeRightTransition } from '@/transitions'

export default {
  name: 'chooseFood',
  methods: {
    back() {
      this.$router.push({ name: 'root' })
    }
  },
  components: {
    Logo,
    FadeRightTransition
  }
}
</script>
