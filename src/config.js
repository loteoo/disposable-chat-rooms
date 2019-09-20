const apiPrefix = process.env.NODE_ENV === 'production' ? '/api' : ':8888'
const apiURL = `${window.location.protocol}//${window.location.hostname}${apiPrefix}`

const config = {
  API_URL: apiURL
}

export default config
