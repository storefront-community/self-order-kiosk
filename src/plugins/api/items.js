import axios from 'axios'
import { Item } from '@/models';

export default {
  async list(categoryId) {
    const path = `/livedemo/data/items/${categoryId}.json`
    const response = await axios.get(path)

    if (response && response.status === 200) {
      return response.data.items.map(params => new Item(params))
    }

    return null
  }
}
