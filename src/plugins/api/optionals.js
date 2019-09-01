import axios from 'axios'
import { Optional } from '@/models';

export default class OptionalApi {
  constructor() {
    this.locale = ''
  }

  async list(categoryId) {
    const path = `/livedemo/data/${this.locale}/optionals/${categoryId}.json`
    const response = await axios.get(path)

    if (response && response.status === 200) {
      return response.data.optionals.map(params => new Optional(params))
    }

    return null
  }
}
