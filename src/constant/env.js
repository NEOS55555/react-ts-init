const envMap = {
  // 开发环境
  isDev:
    process.env.NODE_ENV === 'development' &&
    process.env.REACT_APP_NODE_ENV === 'development',
  // mock本地环境
  isMock:
    process.env.NODE_ENV === 'development' &&
    process.env.REACT_APP_NODE_ENV === 'mock',
  // 生产环境
  isProd: process.env.NODE_ENV === 'production',
}

export default envMap
