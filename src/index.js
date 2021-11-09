import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import { Provider } from '@/reducer'
import { BrowserRouter as Router, HashRouter } from 'react-router-dom'
// console.log(process.env)
ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider>
      <Router>
        <App />
      </Router>
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
)
