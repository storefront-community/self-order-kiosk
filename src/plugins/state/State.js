import { Order } from '@/models'

export default class State {
  initialized = false
  order = null
  category = null
  item = null

  init() {
    this.initialized = true
    this.order = new Order()
    this.category = null
    this.item = null
  }
}
