const map = {
  geta: {
    method: 'get',
    path: '/aa/:a',
    proxy: '/api',
    proxyHost: 'http://abc.com',
  },
  getab: {
    method: 'get',
    path: '/aa/:a',
    proxy: '/api',
    lazyput: true, // 替换了:a之后，params里的参数a是否还留着
    proxyHost: 'http://abc.com',
  },
  getb: {
    method: 'get',
    path: '/abc',
    proxy: '/sys',
  },
  login: {
    method: 'get',
    path: '/login',
  },
}
export default map
