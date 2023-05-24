import ReactDOM from 'react-dom'
import React, { Component, createRef, useState } from 'react'
import SwiperCore, { Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

export default class SwiperCtn extends Component {
  // swiperRef = createRef()
  controlledSwiper = null
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      index: 0,
    }
  }

  setData = (list) => {
    this.setState({
      list,
    })
  }
  next = () => {
    const { index } = this.state

    this.controlledSwiper.slideTo(index + 1)
  }
  prev = () => {
    const { index } = this.state

    this.controlledSwiper.slideTo(index - 1)
  }

  onSlideChange = (e) => {
    console.log(e.activeIndex)
    const index = parseInt(e.activeIndex || 0)

    this.setState({
      index,
    })
  }

  render() {
    const { index, list = [] } = this.state
    const { content } = this.props

    // const { imgLoad } = this;
    return (
      <Swiper
        activeIndex={index}
        // controller={{ control: controlledSwiper }}
        // ref={this.swiperRef}
        spaceBetween={50}
        slidesPerView={1}
        // onReachEnd={() => list.length > 0 && this.onReachEnd()}
        // onReachBeginning={() => list.length > 0 && this.onReachBeginning()}
        onSlideChange={this.onSlideChange}
        onSwiper={(swiper) => {
          swiper.slideTo(0, 0)
          this.controlledSwiper = swiper
        }}
      >
        {list.map((it, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            {content && content(it)}
          </SwiperSlide>
        ))}
      </Swiper>
    )
  }
}

/* let controlledSwiper = null
export default function SwiperCtn({ list = [], content, }) {
  const [index, setIndex] = useState(0)
  // const [list, setlist] = useState([])

  function onSlideChange(e) {
    console.log(e.activeIndex)
    const index = parseInt(e.activeIndex || 0)

    setIndex(index)
  }

  return (
    <Swiper
      // activeIndex={index}
      // controller={{ control: controlledSwiper }}
      // ref={this.swiperRef}
      spaceBetween={50}
      slidesPerView={1}
      // onReachEnd={() => list.length > 0 && this.onReachEnd()}
      // onReachBeginning={() => list.length > 0 && this.onReachBeginning()}
      onSlideChange={onSlideChange}
      onSwiper={(swiper) => {
        swiper.slideTo(0, 0)
        controlledSwiper = swiper
      }}
    >
      {list.map((it, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          {content && content(it)}
        </SwiperSlide>
      ))}
    </Swiper>
  )
} */
