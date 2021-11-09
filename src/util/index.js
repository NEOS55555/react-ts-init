import eventBus from './eventBus'

import routerUtil from './routerUtil'
import libMap from './lib.ts'
import ruleMap from './rule'

/* const { RouteWithRoutes, routerPathTrans } = routerUtil
export { RouteWithRoutes, routerPathTrans } */
// export const abc = '123'

const map = {
  eventBus,
  ...routerUtil,
  ...libMap,
  ...ruleMap,
}

// ***************

export default map
