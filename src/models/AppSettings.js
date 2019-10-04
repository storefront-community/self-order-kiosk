export default class AppSettings {
  constructor(params = {}) {
    this.version = params.version || ''
    this.theme = params.theme || ''
  }
}
