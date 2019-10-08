import axios from 'axios'
import { Item } from '@/models';

export default class ItemApi {
  constructor() {
    this.locale = ''
    this.virtualPath = ''
  }

  async list(itemGroupId) {
    const path = `${process.env.VUE_APP_API_BASE_URL}${this.virtualPath}/menu/${this.locale}/items/${itemGroupId}.json`
    const response = await axios.get(path)

    if (response && response.status === 200) {
      return response.data.items.map(params => new Item(params))
    }

    return null
  }
}
