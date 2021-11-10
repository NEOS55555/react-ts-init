import apiAxios from '@/api'
import { Button } from 'antd'
import React, { useEffect } from 'react'
function Index() {
  useEffect(() => {
    /* apiAxios.geta({
      params: {
        a: 1,
      },
      config: {
        headers: { TOKEN: '1' },
      },
    })
    apiAxios.getab({
      params: {
        a: 'abparams',
      },
      config: {
        headers: { TOKEN: '1' },
      },
    }) */
    apiAxios.getb({
      params: {
        a: 1,
      },
      config: {
        headers: { TOKEN: '1' },
      },
    })
    console.log('进入页面1')
  }, [])
  return (
    <div>
      页面1
      <Button
        onClick={() => {
          apiAxios.login()
        }}
      >
        登陆
      </Button>
    </div>
  )
}

export default Index
