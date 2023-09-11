import axiosFromLibrary from 'axios'

const axios = axiosFromLibrary.create({
  baseURL: 'http://91.219.61.90:9001/',
  // baseURL: 'http://localhost:9001/',
  ...axiosFromLibrary.defaults,
})

export { axios }
