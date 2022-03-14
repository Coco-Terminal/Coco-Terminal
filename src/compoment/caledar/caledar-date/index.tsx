/* eslint-disable array-callback-return */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './index.css'
import { Calendar } from 'antd'
import { Table, Tag, Space } from 'antd'
export default function CaledarDate() {
  function onPanelChange(value: any, mode: any) {
    console.log(value, mode)
  }

  const dataSource = [
    {
      key: '1',
      name: '1am',
      age: '',
      address: '',
    },
    {
      key: '2',
      name: '2am',
      age: '',
      address: '',
    },
    {
      key: '3',
      name: '3am',
      age: '',
      address: '',
    },
    {
      key: '4',
      name: '4am',
      age: '',
      address: '',
    },
    {
      key: '5',
      name: '5am',
      age: '',
      address: '',
    },
    {
      key: '6',
      name: '6am',
      age: '',
      address: '',
    },
    {
      key: '7',
      name: '7am',
      age: '',
      address: '',
    },
    {
      key: '8',
      name: '8am',
      age: '',
      address: '',
    },
    {
      key: '9',
      name: '9am',
      age: '',
      address: '',
    },
  ]

  const columns = [
    {
      title: '11',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '12',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '13',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '14',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '15',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '16',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '17',
      dataIndex: 'address',
      key: 'address',
    },
  ]
  const datetime = [
    {
      key: '1',
      title: 'Mon',
    },
    {
      key: '1',
      title: 'Tue',
    },
    {
      key: '2',
      title: 'Wed',
    },
    {
      key: '3',
      title: 'Thu',
    },
    {
      key: '4',
      title: 'Frl  ',
    },
    {
      key: '5',
      title: 'Sot',
    },
    {
      key: '6',
      title: 'Sot',
    },
  ]
  return (
    <div className="NFT_page">
      <h1>NFt Colender</h1>
      <div className="NFT_page_div">
        <div className="NFT_page_div_date">
          <Calendar
            fullscreen={false}

            // onPanelChange={onPanelChange}
          />
        </div>
        <div className="NFT_page_div_table">
          <div className="Nft_page_div_table1">
            {/* {
                   datetime.map((itme)=>{
                         <span className='Nft_page_div_table1_span' key={itme.key}>
                                {itme.title}
                         </span>
                   })
                 } */}
            <span style={{ marginLeft: '2rem' }}>Mon</span>
            <span style={{ marginLeft: '2.3rem' }}>Tue</span>
            <span style={{ marginLeft: '2.3rem' }}>Wed</span>
            <span style={{ marginLeft: '3rem' }}>Thu</span>
            <span style={{ marginLeft: '2.7rem' }}>Frl</span>
            <span style={{ marginLeft: '2.2rem' }}>Sot</span>
            <span style={{ marginLeft: '2.4rem' }}>Sot</span>
          </div>
          <Table dataSource={dataSource} columns={columns} />;
        </div>
      </div>
    </div>
  )
}
