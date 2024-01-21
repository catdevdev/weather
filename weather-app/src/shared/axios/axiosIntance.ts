import axiosFromLibrary from 'axios'

const axios = axiosFromLibrary.create({
  baseURL: 'http://109.200.237.153:9001/',
  // baseURL: 'http://localhost:9001/',
  ...axiosFromLibrary.defaults,
})

export { axios }
