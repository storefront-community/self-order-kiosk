<template>
  <div class="d-flex flex-column">
    <IdleTime @timeout="showMenuBoard"/>
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
import IdleTime from '@/components/IdleTime'
import Loader from '@/components/Loader'

export default {
  name: 'home',
  methods: {
    showMenuBoard() {
      const params = { contentId: 1 }
      this.$router.push({ name: 'menuBoard', params: params })
    }
  },
  components: {
    IdleTime,
    Loader
  }
}
</script>
