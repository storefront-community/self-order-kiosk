import axios from 'axios'

export default {
  async pages () {
    const path = '/livedemo/data/menu-board-pages.json'
    const response = await axios.get(path)

    return response && response.status === 200 ? response.data.pages : null
  }
}
