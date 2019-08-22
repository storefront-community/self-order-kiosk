import { Order } from '@/models'

export default class AppSession {
  constructor() {
    this.order = null
    this.category = null
    this.item = null
    this.started = false
  }

  start() {
    this.order = new Order()
    this.category = null
    this.item = null
    this.started = true
  }

  addItem() {
    this.order.addItem(this.item)
    this.category = null
    this.item = null
  }
}
