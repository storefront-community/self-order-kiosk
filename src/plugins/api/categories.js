import axios from 'axios'
import { Category } from '@/models';

export default class CategoryApi {
  constructor() {
    this.locale = ''
  }

  async list() {
    const path = `/livedemo/data/${this.locale}/categories.json`
    const response = await axios.get(path)

    if (response && response.status === 200) {
      return response.data.categories.map(params => new Category(params))
    }

    return null
  }
}
