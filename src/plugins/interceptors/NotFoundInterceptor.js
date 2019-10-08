export default [
  config => config,
  error => {
    if (error.response && error.response.status === 404) {
      return Promise.resolve(error.response)
    } else {
      return Promise.reject(error)
    }
  }
]
