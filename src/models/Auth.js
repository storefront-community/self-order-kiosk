export default class Auth {
  constructor(params = {}) {
    this.token = params.token || ''
    this.virtualPath = params.virtualPath || ''
  }
}
