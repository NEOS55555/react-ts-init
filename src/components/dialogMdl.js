import React, { Component } from 'react'
import { Modal } from 'antd'
import ReactDOM from 'react-dom'

const defData = {
  zIndex: '',
  maskClosable: false,
  title: '',
  content: '',
  width: 'auto',
  okText: '确定',
  footer: undefined,
}

class Dialog extends Component {
  state = {
    confirmLoading: false,
    visible: false,
    ...defData,
  }
  show = (config = {}) => {
    this.setState({
      visible: true,
      onCancel: this.hide,
      ...defData,
      ...config,
    })
  }
  showLoading = () => {
    this.setState({
      confirmLoading: true,
    })
  }
  hideLoading = () => {
    this.setState({
      confirmLoading: false,
    })
  }
  hide = () => {
    this.setState({
      confirmLoading: false,
      visible: false,
      footer: undefined,
    })
  }
  render() {
    const { content, maskClosable } = this.state
    return (
      <Modal
        onCancel={this.hide}
        maskClosable={maskClosable}
        okText="确定"
        cancelText="取消"
        {...this.state}
        zIndex={99999}
        // title={title}
        // footer={footer}
        // visible={visible}
        // onOk={onOk}
        // confirmLoading={confirmLoading}
      >
        <div key={Math.random()}>{content}</div>
      </Modal>
    )
  }
}

let div = document.createElement('div')
let props = {}
document.body.appendChild(div)

let dialogMdl = ReactDOM.render(React.createElement(Dialog, props), div)

export default dialogMdl
