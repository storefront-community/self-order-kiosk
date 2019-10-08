import axios from 'axios'
import { Auth } from '@/models'

export default class AuthApi {
  async getToken(code) {
    const path = `${process.env.VUE_APP_API_BASE_URL}/token/${code}.json`
    const response = await axios.get(path)

    if (response && response.status === 200) {
      return new Auth(response.data)
    }

    return null
  }
}
