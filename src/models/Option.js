export default class Option {
  constructor(params = {}) {
    this.id = params.id || ''
    this.name = params.name || ''
    this.price = params.price || 0
    this.checked = false
  }
}
