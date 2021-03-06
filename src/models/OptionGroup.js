export default class OptionGroup {
  constructor(params = {}) {
    this.id = params.id || ''
    this.title = params.title || ''
    this.required = params.required || false
    this.multichoice = params.multichoice || false
    this.options = null
  }

  isValid() {
    const options = this.options || []

    const required = !this.required || options
      .filter(option => option.checked).length >= 1

    const multichoice = this.multichoice || options
      .filter(option => option.checked).length <= 1

    return required && multichoice
  }
}
