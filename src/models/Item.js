export default class Item {
  constructor(params = {}) {
    this.id = params.id || ''
    this.name = params.name || ''
    this.price = params.price || 0
    this.imageUrl = params.imageUrl || ''
    this.options = params.options || []
  }
}
