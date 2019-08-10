export default {
  props: {
    order: {
      type: Object
    }
  },
  mounted() {
    if (!this.order) {
      // Without setTimeout() the route changes but view does not render
      setTimeout(() => this.$router.push({ name: 'welcome' }))
    }
  }
}
