import axios from 'axios'

export default {
  async load() {
    const path = '/livedemo/data/catalog.json'
    const response = await axios.get(path)

    return response && response.status === 200 ? response.data : null
  }
}
