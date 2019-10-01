export default class OptionGroup {
  constructor(params = {}) {
    this.id = params.id || ''
    this.title = params.title || ''
    this.required = params.required || false
    this.multichoice = params.multichoice || false
  }

  isValid() {
    return true;

    // TODO

    // const required = !this.required || this.options
    //   .filter(option => option.checked).length >= 1

    // const multichoice = this.multichoice || this.options
    //   .filter(option => option.checked).length <= 1

    // return required && multichoice
  }
}
