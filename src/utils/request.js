import axios from 'axios'

const baseURL = 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd'
const instance = axios.create({
  baseURL,
  timeout: 10000
})
export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then((response) => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      baseURL,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      resolve(response)
    }, err => {
      reject(err)
    })
  })
}
