export default {
  install (Vue) {
    const routing = {}

    Vue.mixin({
      beforeRouteEnter(to, from, next) {
        routing.to = to
        routing.from = from

        next()
      },
      methods: {
        getRouteDirection() {
          const forward = routing.to.meta.step > routing.from.meta.step
          return forward ? 'left' : 'right'
        }
      }
    })
  }
}
