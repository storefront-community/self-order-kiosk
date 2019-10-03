export default class Order {
  constructor() {
    this.startedAt = new Date()
    this.name = ''
    this.mobile = ''
    this.takeOut = false
    this.items = []
  }

  add(item) {
    this.items.push(item)
  }

  increment(item) {
    item.increment()
  }

  decrement(item) {
    item.decrement()
  }

  total() {
    return this.items
      .map(item => item.total())
      .reduce((total, subtotal) => total + subtotal, 0)
  }
}
