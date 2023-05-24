import apiAxios from '@/api'
import SwiperCtn from '@/components/SwiperCtn'
import danmu from '@/components/danmu'
import { Button } from 'antd'
import React, { useEffect, useRef } from 'react'
import './index.scss'

danmu.init()

export default function HomePage() {
  const swiperRef = useRef()
  useEffect(() => {
    const arr = [{ key: 1 }, { key: 2 }]
    swiperRef.current.setData(arr)
  }, [])
  function prevPage() {
    swiperRef.current.prev()
  }
  function nextPage() {
    swiperRef.current.next()
  }
  function senddanmu() {
    danmu.createByOne('你说什么')
  }
  function senddanmus() {
    danmu.create('你说什么噢噢噢噢')
  }
  return (
    <div className="box-wrap">
      <div className="box">
        <h1>这是SwiperCtn</h1>
        <SwiperCtn
          ref={swiperRef}
          content={(arr) => (
            <div className="record-lottery-ctn">
              <div>123123123213123</div>
            </div>
          )}
        ></SwiperCtn>
      </div>
      <div className="box">
        <Button onClick={senddanmu}>发送弹幕一行</Button>
        <Button onClick={senddanmus}>发送弹幕多行</Button>
      </div>
    </div>
  )
}
