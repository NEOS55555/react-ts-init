import React from 'react'
import Page1 from '@/pages/page1'
import Page2 from '@/pages/page2'
import Page3 from '@/pages/page3'
import Page4 from '@/pages/page4'
import { Redirect } from 'react-router-dom'

import $util from '@/util'

// export const routeGuard

const routes = [
  {
    path: '/page1',
    component: Page1,
    auth: (props) => {
      console.log('auth', props)
      if (1) {
        return
      }
      return (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      )
    },
  },
  {
    path: '/page2',
    component: Page2,
    routes: [
      {
        path: '/page3',
        component: Page3,
        /* auth () {
          console.log('sdf')
          return true
        } */
      },
      {
        path: '/page4',
        component: Page4,
        /* auth () {
          console.log('sdf')
          return true
        } */
      },
    ],
  },
]
$util.routerPathTrans(routes)
const routerMap = {
  routes,
}

export default routerMap
