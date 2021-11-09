import axiosOri from 'axios'
import $const from '@/constant'
import $util from '@/util'

// const { API_URL } = comConstant
// console.log(CONFIG.BASEURL)
const axios = axiosOri.create({
  // baseURL: CONFIG.BASEURL,
  timeout: $const.CONFIG.TIMEOUT,
  // headers: { 'X-Custom-Header': 'foobar' },
})

//请求拦截
axios.interceptors.request.use(
  (config) => {
    // loading().transShow()
    return config
  },
  (err) => {
    // loading().close()
    return Promise.reject(err)
  }
)

function dealResCode(status) {
  switch (status) {
    case $const.HTTP.CODE_401:
      console.log('重新登陆')
      $util.eventBus.emit('history#login')
      return false
    case $const.HTTP.CODE_200:
      return true
    default:
      return true
  }
}

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    const { data = {}, status } = response
    if (dealResCode(status)) {
      return data
    }
    return Promise.reject(response)
    /* if (data[CONFIG.RESPONSE_CODE] !== HTTP.CODE_200) {
      return Promise.reject(response)
    } */
    // return data
  },
  function (err, a) {
    console.log(err, a)
    console.log(err.response)
    const { status } = err.response
    dealResCode(status)

    return Promise.reject(err)
  }
)

const pstMethods = ['post', 'put', 'delete']
const methods = ['get', 'patch', ...pstMethods]

const apiAxios = {}

methods.forEach((method) => {
  const isPst = pstMethods.indexOf(method) != -1
  apiAxios[method] = (url, obj = {}) => {
    let { params, config = {}, lazyput } = obj
    // console.log(params)
    url = url.replace(/(:[a-zA-z0-9]+)/gi, function (sep) {
      const param = params[sep.slice(1)]
      if (!lazyput) {
        delete params[sep.slice(1)]
      }
      return param
    })
    params = isPst ? params : { params, ...config }
    // console.log('url:', url, params, config)
    return axios[method](url, params, config)
  }
})

apiAxios.send = function (url, obj) {
  obj.lazyput = obj.lazyput == null ? url.lazyput : obj.lazyput
  this[url.method](url.path, obj)
}

export default apiAxios
