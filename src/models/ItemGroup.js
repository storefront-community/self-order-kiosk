export default class ItemGroup {
  constructor(params = {}) {
    this.id = params.id || ''
    this.name = params.name || ''
    this.imageUrl = params.imageUrl || ''
  }
}
