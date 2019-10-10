import axios from 'axios'
import { ItemGroup } from '@/models';

export default class ItemGroupApi {
  constructor() {
    this.locale = ''
    this.virtualPath = ''
  }

  async list() {
    const path = `${process.env.VUE_APP_API_BASE_URL}${this.virtualPath}/menu/${this.locale}/item-groups.json`
    const response = await axios.get(path)

    if (response && response.status === 200) {
      return response.data.itemGroups.map(params => new ItemGroup(params))
    }

    return null
  }
}
