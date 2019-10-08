import { Order } from '@/models'

class AppSession {
  constructor() {
    this.theme = ''
    this.locale = ''
    this.order = null
    this.itemGroup = null
    this.item = null
    this.started = false
  }

  start() {
    this.order = new Order()
    this.started = true
  }

  addItemToOrder() {
    this.order.add(this.item)
    this.itemGroup = null
    this.item = null
  }
}

export default {
  install (Vue) {
    Vue.prototype.$session = new AppSession()

    Vue.mixin({
      data() {
        return {
          session: this.$session
        }
      }
    })
  }
}
