import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import 'antd/dist/antd.css'
import './App.scss'
import $util from '@/util'
import Com from './com'
import router from '@/router'

const { RouteWithRoutes } = $util

console.log(process.env)
const dd = process.env
class App extends Component {
  state = {
    initval: {},
  }
  componentDidMount() {
    console.log('ffffffffffff', this.props)
    $util.eventBus.on('history#login', () => {
      this.props.history.push('/login')
    })
    this.setState({
      initval: {
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      },
    })
  }
  render() {
    return (
      <>
        {this.state.initval && <Com initval={this.state.initval} />}
        <ul>
          <li>
            <Link to="/page1">page1</Link>
          </li>
          <li>
            <Link to="/page2">page2</Link>
          </li>
        </ul>
        <div>{JSON.stringify(dd)}</div>

        <RouteWithRoutes routes={router.routes} abcdef="adfs" />
      </>
    )
  }
}

export default withRouter(App)
