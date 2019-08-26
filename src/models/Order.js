export default class Order {
  constructor() {
    this.startedAt = new Date()
    this.name = ''
    this.mobile = ''
    this.takeOut = false
    this.items = []
    this.total = 0
  }

  add(item) {
    this.items.push(item)
    this.calculate()
  }

  increment(item) {
    item.increment()
    this.calculate()
  }

  decrement(item) {
    item.decrement()
    this.calculate()
  }

  calculate() {
    this.total = this.items
      .map(item => item.total())
      .reduce((total, subtotal) => total + subtotal, 0)
  }
}
