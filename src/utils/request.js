/**
 * 封装 axios 请求模块
 */
import axios from 'axios'
import store from '@/store'
import jsonBig from 'json-bigint'
import { Toast } from 'vant'

// 创建一个 axios 实例

const request = axios.create({
  // 配置请求的基准URL地址
  // baseURL: 'http://ttapi.research.itcast.cn/' // 基础路径
  transformResponse: [function (data) {
    try {
      // 如果转换成功则返回转换的数据结果
      return jsonBig.parse(data)
    } catch (err) {
      // 如果转换失败，则包装为统一数据格式并返回
      return {
        data
      }
    }
  }]
})

// 请求拦截器
// Add a request interceptor
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  // config ：本次请求的配置对象
  // config 里面有一个属性：headers
  const { user } = store.state
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, function (error) {
  const status = error.response.status
  if (status === 400) {
    Toast.fail('客户端请求参数错误')
  } else if (status === 401) {
    // 无效的 TOKEN
    Toast.fail('无效的TOKEN')
  } else if (status === 403) {
    Toast.fail('客户端没有权限')
  } else if (status === 404) {
    Toast.fail('请求资源不存在')
  } else if (status === 405) {
    Toast.fail('请求方法不支持')
  } else if (status >= 500) {
    Toast.fail('服务器抽风了')
  }
  // 错误错误
  return Promise.reject(error)
})
// 响应拦截器
export default request
