import Page3 from '@/pages/page3'
import { RouteWithRoutes } from '@/util/routerUtil'
import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// const { RouteWithRoutes } = $util
// let list: Array<number | string> = [1, 2, 3, 's']
function Index(props: any) {
  console.log('进入页面2', props)
  const [count, setcount] = useState(0)
  useEffect(() => {
  }, [])
  return (
    <div>
      页面2
      <p>
        <button onClick={() => setcount(count + 1)}>{count}</button>
      </p>
      <Link to={props.routePath + '/page3'}>page315</Link>
      <Link to={props.routePath + '/page4'}>page4</Link>
      <Page3 abc={555} def={'这是字符串的呢'} />
      <Button>牛逼</Button>
      <RouteWithRoutes routes={props.routes} comProps={{ abc: 'asdffg' }} page3Props={{ def: count }} />
      {/* <Switch>
        {props.routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch> */}
    </div>
  )
}

export default (Index)
