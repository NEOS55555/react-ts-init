import Page1 from '@/pages/page1'
import Page2 from '@/pages/page2'
import Page3 from '@/pages/page3'
import Page4 from '@/pages/page4'
import { eventBus } from '@/util/eventBus'
import { routerPathTrans } from '@/util/routerUtil'
import React from 'react'
import { Redirect } from 'react-router-dom'

// export const routeGuard
eventBus.on('abc')
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
routerPathTrans(routes)

export { routes }
