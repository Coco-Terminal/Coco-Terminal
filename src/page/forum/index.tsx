import React from 'react'
import './index.css'
import {
    WalletOutlined
} from "@ant-design/icons"
import { Button } from 'antd';
export default function Forum() {
    const wallet =()=>{
        console.log('1111');
        
    }
  return (
    <div className='forum'>
         <div className='forum_box'>
         <WalletOutlined />
         <div>
         <Button onClick={wallet}>
              Connect Wallet
         </Button>
         </div>
        
         </div>
        
    </div>
  )
}
 