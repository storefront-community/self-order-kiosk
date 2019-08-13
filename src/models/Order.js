export default class Order {
  _items = []
  startedAt = new Date()
  name = ''
  mobile = ''
  takeOut = false
  total = 0

  addItem(item) {
    this._items.push(item)
    this.total += item.price
  }

  hasItem() {
    return !!this._items.length
  }

  lastItem() {
    const last = this._items.length - 1
    return this._items[last]
  }
}
