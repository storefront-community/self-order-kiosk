import { Order } from '@/models'

export default class AppSession {
  order = null
  category = null
  item = null
  initialized = false

  init() {
    this.order = new Order()
    this.category = null
    this.item = null
    this.initialized = true
  }

  addItem() {
    this.order.addItem(this.item)
    this.category = null
    this.item = null
  }
}
