import axios from 'axios'
import { OptionGroup } from '@/models';

export default class OptionGroupApi {
  constructor() {
    this.locale = ''
    this.tenant = ''
  }

  async list(itemGroupId) {
    const path = `${process.env.VUE_APP_API_BASE_URL}/${this.tenant}/menu/${this.locale}/option-groups/${itemGroupId}.json`
    const response = await axios.get(path)

    if (response && response.status === 200) {
      return response.data.optionGroups.map(params => new OptionGroup(params))
    }

    return null
  }
}
