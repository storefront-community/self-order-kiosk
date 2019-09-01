import { Order } from '@/models'

export default class AppSession {
  constructor(locale) {
    this.locale = locale
    this.order = null
    this.category = null
    this.item = null
    this.started = false
  }

  start() {
    this.order = new Order()
    this.started = true
  }

  addItemToOrder() {
    this.order.add(this.item)
    this.category = null
    this.item = null
  }
}
