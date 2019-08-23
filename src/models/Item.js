export default class Item {
  constructor(params = {}) {
    this.id = params.id || ''
    this.name = params.name || ''
    this.price = params.price || 0
    this.imageUrl = params.imageUrl || ''
    this.optionals = []
  }

  total() {
    let total = this.price

    total += this.optionals
      .map(optional => optional.options
        .filter(option => option.checked)
        .map(option => option.price))
      .reduce((all, options) => all.concat(options))
      .reduce((total, subtotal) => total + subtotal, 0)

    return total
  }
}
