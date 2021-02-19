import axios from 'axios'

// 重新实例化一个，会覆盖所有默认属性
const server = axios.create({
  baseURL: "/api",
  timeout: 5000,
  heads: { 'content-type': 'application/x-www-form-urlencoded' }
})

//请求拦截
server.interceptors.request.use( config => {
  console.log('请求拦截')
  console.log(config)
  config.headers.token = 'token';
  return config
}, err => {
  console.log('请求拦截err')
  console.log(err)
  return Promise.reject(err)
})

//响应拦截器
server.interceptors.response.use( response => {
  console.log('响应拦截器success')
  console.log(response)
  return response;
}, err => {
  console.log('响应拦截器err')
  console.log(err)
  return Promise.reject(err)
})

export default server