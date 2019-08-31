import { Order } from '@/models'

export default class AppSession {
  constructor() {
    this.order = null
    this.category = null
    this.item = null
    this.started = false
    this.locale = /br/i.test(navigator.language) ? 'br' : 'en'
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
