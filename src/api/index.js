import apiAxios from './apiAxios'
import apiMap from './apiMap'
import $const from '@/constant'

// 检测一遍
if ($const.isDev) {
  const item = Object.keys(apiMap).find(
    (it) => Object.keys(apiAxios).indexOf(it) !== -1
  )
  if (item) {
    throw Error(`apiMap不可重复添加名称为${item}的接口`)
  }
}
function send(url, config = {}) {
  let path = url.path
  if ($const.isDev) {
    path = (url.proxy || process.env.REACT_APP_PROXY_API || '') + path
  }
  path = (url.proxyHost || '') + path
  return apiAxios.send({ ...url, path }, config)
}
const apiAxiosSend = {}
for (let key in apiMap) {
  const apiItem = apiMap[key]
  apiAxiosSend[key] = function (...args) {
    send(apiItem, ...args)
  }
}
const data = {
  ...apiAxios,
  send,
  ...apiAxiosSend,
}

export default data
