export default class ItemGroup {
  constructor(params = {}) {
    this.id = params.id || ''
    this.name = params.name || ''
    this.items = null
  }
}
