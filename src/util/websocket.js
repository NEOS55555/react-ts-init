export function initWs(uri) {
  var ws
  let isOpen = false
  let arr = []
  var onOpencb
  init()
  let onmessageCb = function () {}
  function init() {
    try {
      ws = new WebSocket(uri)
    } catch (e) {
      console.log('eeeee')
      console.log(e)
    }
    ws.onopen = function (evt) {
      console.log('Connection open ...')
      isOpen = true
      opend()
      onOpencb && onOpencb()
    }
    ws.onerror = function () {
      // console.log('重连 error')
    }

    ws.onmessage = function (evt) {
      // console.log('Received Message: ' + evt.data)
      // ws.close()
      onmessageCb(evt)
    }

    ws.onclose = function (evt) {
      console.log('Connection closed.')
      setTimeout(() => {
        init()
      }, 500)
    }
  }
  function opend() {
    for (let i = 0; i < arr.length; i++) {
      arr[i]()
    }
    arr = []
  }

  return {
    init,
    isOpen() {
      return isOpen
    },
    onOpen(cb) {
      onOpencb = cb
    },
    wsSend(agv) {
      if (isOpen) {
        ws.send(agv)
      } else {
        arr.push(() => ws.send(agv))
      }
    },
    onmessage(cb) {
      onmessageCb = cb
    },
  }
}
