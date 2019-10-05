import axios from 'axios'
import { AppSettings } from '@/models';

export default class SettingsApi {
  constructor() {
    this.tenant = ''
  }

  async get() {
    const path = `${process.env.VUE_APP_API_BASE_URL}/${this.tenant}/app.json`
    const response = await axios.get(path)

    if (response && response.status === 200) {
      return new AppSettings(response.data)
    }

    return null
  }
}
