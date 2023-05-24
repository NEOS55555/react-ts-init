import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './index.scss'
import { DanmuItem, createDanmuItem } from './DanmuItem'
import { invokeEventArr } from '@/util'

const danmu = {
  init() {
    this.MAX_SHOW_COUNT = parseInt(window.GLOBAL_WEB_SETTING.maxShowCount) || 4

    this.invokeEventArrEvt = invokeEventArr(this.MAX_SHOW_COUNT)
    this.invokeEventArrEvtOne = invokeEventArr(1)
    console.log(
      'MAX_SHOW_COUNT',
      window.GLOBAL_WEB_SETTING.maxShowCount,
      this.MAX_SHOW_COUNT
    )

    this.idx = 0
    this.timeout = window.GLOBAL_WEB_SETTING.danmuMoveTime || 5
    this.oneDanmuMarginFontLen =
      window.GLOBAL_WEB_SETTING.oneDanmuMarginFontLen || 3 // 3个字
    this.fontSize = parseInt(window.GLOBAL_WEB_SETTING.danmuFontSize) || 20
    // 每条弹幕的间距
    this.mar = window.GLOBAL_WEB_SETTING.danmuMarBottom || 200
    // 弹幕的上边距
    this.martop = window.GLOBAL_WEB_SETTING.danmuMarTop || 50
    this.fontColor = window.GLOBAL_WEB_SETTING.danmuFontColor
    this.danmuBgColor = window.GLOBAL_WEB_SETTING.danmuBgColor
  },
  createCallNo: function (text) {
    const index = this.idx++ % this.MAX_SHOW_COUNT
    const cdiObj = createDanmuItem({
      onOver: () => {
        this.invokeEventArrEvt.over()
        cdiObj.destory()
      },
      timeout: this.timeout * 1000,
      text,
      style: {
        top: this.mar * index + this.martop,
        fontSize: this.fontSize,
        color: this.fontColor,
        backgroundColor: this.danmuBgColor,
        transition: `${this.timeout}s all linear`,
        '--left': `-${this.fontSize * text.length}px`,
      },
    })
  },
  create(text) {
    this.invokeEventArrEvt.push(() => {
      this.createCallNo(text)
    })
  },
  createCallNoOne: function (text) {
    const curtxtwidth = this.fontSize * text.length
    const cdiObj = createDanmuItem({
      onOver: () => {
        cdiObj.destory()
      },
      timeout: this.timeout * 1000,
      text,
      style: {
        top: this.martop,
        fontSize: this.fontSize,
        color: this.fontColor,
        backgroundColor: this.danmuBgColor,
        transition: `${this.timeout}s all linear`,
        '--left': `-${curtxtwidth}px`,
      },
    })
    const alllen = window.outerWidth + curtxtwidth
    const oneSecondMove = alllen / this.timeout
    const allmoveoverTime =
      (curtxtwidth + this.oneDanmuMarginFontLen * this.fontSize) / oneSecondMove

    console.log('allmoveoverTime', allmoveoverTime)
    setTimeout(() => {
      console.log('over')
      this.invokeEventArrEvtOne.over()
    }, allmoveoverTime * 1000)
  },
  createByOne(text) {
    this.invokeEventArrEvtOne.push(() => {
      this.createCallNoOne(text)
    })
  },
}
export default danmu
