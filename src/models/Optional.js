class Option {
  constructor(params = {}) {
    this.name = params.name || ''
    this.price = params.price || 0
  }
}

export default class Optional {
  constructor(params = {}) {
    this.id = params.id || ''
    this.title = params.title || ''
    this.multichoice = params.multichoice || false
    this.options = params.options.map(nestedParams => new Option(nestedParams))
  }
}
