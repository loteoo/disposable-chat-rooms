import config from './config'
export const Api = {
  get: (url) => fetch(config.API_URL + url).then(res => res.json()),
  post: (url, data) => fetch(config.API_URL + url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
}
