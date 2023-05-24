/* const { RouteWithRoutes, routerPathTrans } = routerUtil
export { RouteWithRoutes, routerPathTrans } */
// export const abc = '123'
// 可以按顺序执行
export function getImgUrl(output, prevname, type = 'png') {
  return process.env.PUBLIC_URL + `images/${output}/${prevname}.${type}`
}

export function getCommonImgUrl(prevname, type = 'png') {
  return process.env.PUBLIC_URL + `images/common/${prevname}.${type}`
}

export function invokeEventArr(maxCount = 1) {
  const arr = []
  let starCount = 0
  let isdoing = false
  function start() {
    if (isdoing || arr.length === 0) {
      return
    }
    starCount++
    if (starCount >= maxCount) {
      isdoing = true
    }
    const cb = arr.shift()
    cb()
    /* .finally(() => {
      over()
    }) */
    // over()
    // isdoing = true
  }

  function over() {
    starCount--
    if (starCount < 0) {
      starCount = 0
    }
    // console.log('?????', starCount)
    if (starCount < maxCount) {
      isdoing = false
    }
    start()
  }
  return {
    push(cb) {
      if (cb) {
        arr.push(cb)
      }
      start()
    },
    over,
  }
}
