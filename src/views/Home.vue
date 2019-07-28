<template>
  <div class="d-flex flex-column">
    <Loader class="mb-3"/>
    <h1 class="text-center">
      Storefront Community
    </h1>
    <p class="text-center">
      Working to innovate the food retail experience
    </p>
  </div>
</template>

<script>
import Loader from '@/components/Loader'

export default {
  name: 'home',
  components: {
    Loader
  }
}
</script>
