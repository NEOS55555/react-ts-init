// import router from '@/router'
import { routes } from '@/router'
import { eventBus } from '@/util/eventBus'
import { RouteWithRoutes } from '@/util/routerUtil'
import 'antd/dist/antd.css'
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './App.scss'
import Com from './com'

console.log(process.env)
const dd = process.env
class App extends Component {
  state = {
    initval: {},
  }
  componentDidMount() {
    console.log('ffffffffffff', this.props)
    eventBus.on('history#login', () => {
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

        <RouteWithRoutes routes={routes} abcdef="adfs" />
      </>
    )
  }
}

export default withRouter(App)
