import React, { useEffect } from 'react'
// let list: Array<number | string> = [1, 2, 3, 's']

function Abc(props: any) {
  useEffect(() => {
    console.log('page4  Abc', props)
  }, [])
  return (<div>随便abc</div>)
}
function Index(props: any) {
  useEffect(() => {
    console.log('page4', props)
  }, [])
  return (
    <div>
      <Abc></Abc>
      页面4{props.abc}
    </div>
  )
}

export default Index
