/**
 * 封装 axios 请求模块
 */
import axios from 'sxios'

// 创建一个 axios 实例

const request = axios.create({
  // 配置请求的基准URL地址
  baseURL: 'http://ttapi.research.itcast.cn/' // 基础路径
})

export default request
