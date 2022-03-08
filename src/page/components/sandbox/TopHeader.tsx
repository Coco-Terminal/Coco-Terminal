/* eslint-disable react/jsx-no-undef */
import React from 'react'
import './css/topherder.css'
import { BellFilled } from '@ant-design/icons'
import { Input, Button } from 'antd'
import { CopyOutlined } from '@ant-design/icons'
import logoImg from '../../../assets/logo.png'
export default function TopHeader() {
  return (
    <div className="Topherder">
      <div className="herder_loge">
        <img src={logoImg} alt="" />
      </div>
      <div className="herder_input">
        <Input.Group compact>
          <Input.Search allowClear style={{ width: '100%' }} />
        </Input.Group>
      </div>
      <div className="herder_div"></div>
      <div className="herder_button">
        <Button type="primary" block>
          Primary
        </Button>
      </div>
      <div className="herder_icon">
        <BellFilled />
      </div>
    </div>
  )
}
