import ReactDOM from 'react-dom'
import React, { useEffect, useState } from 'react'

export function DanmuItem({ onOver, timeout, text, style }) {
  const [isshow, setisshow] = useState(false)
  // console.log(onOver)
  useEffect(() => {
    let timmer = null
    if (onOver && timeout) {
      // console.log('timeout', timeout)
      timmer = setTimeout(() => {
        setisshow(false)
        onOver && onOver()

        // clearTimeout(timmer)
      }, timeout)
    }
    return () => clearTimeout(timmer)
  }, [onOver, timeout, setisshow])

  useEffect(() => {
    let timmer = setTimeout(() => {
      setisshow(true)
    }, 100)
    return () => clearTimeout(timmer)
  }, [text])
  return (
    <div className={'danmu-item ' + (isshow ? 'isshow' : '')} style={style}>
      {text}
    </div>
  )
}

export function createDanmuItem(props) {
  const divCtn = document.createElement('div')
  divCtn.style.position = 'relative'
  divCtn.style.zIndex = '1'
  document.body.appendChild(divCtn)
  ReactDOM.render(React.createElement(DanmuItem, props), divCtn)
  return {
    destory() {
      document.body.removeChild(divCtn)
    },
  }
}
