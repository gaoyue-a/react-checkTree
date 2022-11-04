/**
 * 封装 axios
 */
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios"
// import config from "@/config"

// 创建实例
// let server = axios.create({
//   //   baseURL: config.apiPrefix, // 项目发送axios请求的公共地址
//   timeout: 5000
// })

// axios请求阶段相关配置
// 请求拦截
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // config包含了请求相关的所有信息
    // config.headers.token = "11111" // 放后端给的token信息
    return config
  },
  (err: AxiosError) => {
    // 请求发生错误时的回调函数
    // throw new Error(err)
    // console.error(err)
    return Promise.reject(err) // 使用promise将错误信息返回出去
  }
)

// axios 接受到服务器响应信息后的配置
axios.interceptors.response.use(
  (res: AxiosResponse) => {
    // res包含了服务器返回的所有响应信息
    return res.data
  },
  (err: AxiosError) => {
    // 当服务器响应产生错误时的回调函数
    console.error(err)
  }
)
const request = <T>(options: AxiosRequestConfig) => axios.request<T>(options)
export default request
