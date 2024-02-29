import axiosFromLibrary from 'axios'

const axios = axiosFromLibrary.create({
  baseURL: 'http://46.250.23.244:9001/',
  // baseURL: 'http://localhost:9001/',
  ...axiosFromLibrary.defaults,
})

export { axios }
