export default class Item {
  constructor(params = {}) {
    this.id = params.id || ''
    this.name = params.name || ''
    this.price = params.price || 0
    this.imageUrl = params.imageUrl || ''
    this.optionals = []
    this.quantity = 1
  }

  increment() {
    if (this.quantity < 9) {
      this.quantity++
    }
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--
    }
  }

  options() {
    return this.optionals
      .map(optional => optional.options
        .filter(option => option.checked))
      .reduce((all, options) => all.concat(options), [])
  }

  total() {
    let total = this.price

    total += this.options()
      .map(option => option.price)
      .reduce((total, subtotal) => total + subtotal, 0)

    total *= this.quantity

    return total
  }
}
