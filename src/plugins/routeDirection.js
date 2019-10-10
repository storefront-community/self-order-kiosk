export default {
  install (Vue) {
    Vue.mixin({
      beforeRouteEnter(to, from, next) {
        next(vm => {
          const comeToMe = vm.$options.name === to.name
          const imTheNext = to.meta.step > from.meta.step
          const forward = comeToMe && imTheNext

          vm.routeDirection = forward ? 'left' : 'right'
        })
      },
      beforeRouteLeave(to, from ,next) {
        const fromMe = this.$options.name === from.name
        const imThePrevious = to.meta.step > from.meta.step
        const forward = fromMe && imThePrevious

        this.routeDirection = forward ? 'left' : 'right'

        next()
      },
      data() {
        return {
          routeDirection: ''
        }
      },
      methods: {
        nextRouteDirection() {
          return this.routeDirection
        }
      }
    })
  }
}
