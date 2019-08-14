import { Order } from '@/models'

export default class AppState {
  order = null
  selectedCategory = null
  selectedItem = null
  initialized = false

  init() {
    this.order = new Order()
    this.selectedCategory = null
    this.selectedItem = null
    this.initialized = true
  }

  addSelectedItem() {
    this.order.addItem(this.selectedItem)
    this.selectedCategory = null
    this.selectedItem = null
  }
}
