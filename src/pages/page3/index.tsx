import React, { useEffect } from 'react'
import { IFunExampleProps } from './index.d'
import './index.scss'

// map.set([])
function Index(props: IFunExampleProps) {
  useEffect(() => {
    console.log('进入页面3', props)

  }, [])
  return <div className="abc">页面3{props.abc}{props.def}</div>
}

export default Index
