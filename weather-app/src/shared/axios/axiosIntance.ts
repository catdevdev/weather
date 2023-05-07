import axiosFromLibrary from 'axios'

const axios = axiosFromLibrary.create({
  baseURL: 'http://46.175.147.63:9001/',
  // baseURL: 'http://localhost:9001/',
  ...axiosFromLibrary.defaults,
})

export { axios }
