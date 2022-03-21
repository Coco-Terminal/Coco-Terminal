import React from 'react'
import Exchangesecharts from '../../compoment/exchangesecharts'
import './index.css'
export default function Mywallet() {
  return (
    <div className='mywallet'>
      <h1 className='mywallet_h1'>Exchanges vs Dex Traders </h1>
      <div className='mywallet_herder'>
        <Exchangesecharts/>
      </div>
    </div>
  )
}
