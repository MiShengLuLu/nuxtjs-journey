/**
 * 基于 axios 封装的请求模块
 */

import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://conduit.productionready.io'
})

// 通过插件机制获取上下文对象（query、params、req、res、app、store...）
export default ({ store }) => {
  // 请求拦截器
  request.interceptors.request.use(config => {
    const { user } = store.state
    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}`
    }
    // 返回 config 配置对象
    return config
  }, error => {
    return Promise.reject(error)
  })
  // 相应拦截器
}