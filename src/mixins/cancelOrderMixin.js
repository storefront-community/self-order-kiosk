export default {
  methods: {
    cancelOrder() {
      const params = { order: this.order }
      this.$router.push({ name: 'cancelOrder', params })
    }
  }
}
