import React, { useEffect } from 'react'
import { IFunExampleProps } from './index.d'
import './index.scss'
import $util from '@/util'

const map = $util.mapping()
// map.set([])
function Index(props:IFunExampleProps) {
  useEffect(() => {
    console.log('进入页面3', props)
    
  }, [])
  return <div className="abc">页面3{props.abc}{props.def}</div>
}

export default Index
