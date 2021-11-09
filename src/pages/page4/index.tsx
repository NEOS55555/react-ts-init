import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import $util from '@/util'
import Page3 from '@/pages/page3'
import {Button} from 'antd'
// let list: Array<number | string> = [1, 2, 3, 's']
function Index(props: any) {
  useEffect(() => {
    console.log('page4', props)
  }, [])
  return (
    <div>
      页面4{props.abc}
    </div>
  )
}

export default Index
