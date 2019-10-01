import axios from 'axios'
import { Option } from '@/models';

export default class OptionApi {
  constructor() {
    this.locale = ''
  }

  async list(optionGroupId) {
    const path = `${process.env.VUE_APP_API_BASE_URL}/menu/${this.locale}/options/${optionGroupId}.json`
    const response = await axios.get(path)

    if (response && response.status === 200) {
      return response.data.options.map(params => new Option(params))
    }

    return null
  }
}
