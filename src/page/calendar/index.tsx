/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import './index.css'
import { Layout } from 'antd'
import CaledarDate from '../../compoment/calendar/calendar-date'
export default function Calendar() {
  function onPanelChange(value: any, mode: any) {
    console.log(value, mode)
  }
  const arrs = [
    {
      key: '1',
      projectName: 'Lorem Ipsum',
      type: 'TYPE',
      Note: 'Lorem ipsum gjsdashj gajksdhd jk dolor sit amet, consectetuer adipiscing elit. AeneanAeneanAeneanAeneanAeneanAeneanAeneanAenean',
      a: 'View All',
      Price: '1 Eth',
      total: '9.999',
      date: 'feb ob ,2022 00:00:00',
      Day: '00',
      Mrs: '000',
      Min: '000',
      Sec: '000',
    },
    {
      key: '2',
      projectName: 'Lorem Ipsum',
      type: 'TYPE',
      Note: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean',
      a: 'View All',
      Price: '1 Eth',
      total: '9.999',
      date: 'feb ob ,2022 00:00:00',
      Day: '00',
      Mrs: '000',
      Min: '000',
      Sec: '000',
    },
    {
      key: '3',
      projectName: 'Lorem Ipsum',
      type: 'TYPE',
      Note: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean',
      a: 'View All',
      Price: '1 Eth',
      total: '9.999',
      date: 'feb ob ,2022 00:00:00',
      Day: '00',
      Mrs: '000',
      Min: '000',
      Sec: '000',
    },
    {
      key: '4',
      projectName: 'Lorem Ipsum',
      type: 'TYPE',
      Note: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean',
      a: 'View All',
      Price: '1 Eth',
      total: '9.999',
      date: 'feb ob ,2022 00:00:00',
      Day: '00',
      Mrs: '000',
      Min: '000',
      Sec: '000',
    },
    {
      key: '5',
      projectName: 'Lorem Ipsum',
      type: 'TYPE',
      Note: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean',
      a: 'View All',
      Price: '1 Eth',
      total: '9.999',
      date: 'feb ob ,2022 00:00:00',
      Day: '00',
      Mrs: '000',
      Min: '000',
      Sec: '000',
    },
    {
      key: '6',
      projectName: 'Lorem Ipsum',
      type: 'TYPE',
      Note: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean',
      a: 'View All',
      Price: '1 Eth',
      total: '9.999',
      date: 'feb ob ,2022 00:00:00',
      Day: '00',
      Mrs: '000',
      Min: '000',
      Sec: '000',
    },
    {
      key: '7',
      projectName: 'Lorem Ipsum',
      type: 'TYPE',
      Note: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean',
      a: 'View All',
      Price: '1 Eth',
      total: '9.999',
      date: 'feb ob ,2022 00:00:00',
      Day: '00',
      Mrs: '000',
      Min: '000',
      Sec: '000',
    },
    {
      key: '8',
      projectName: 'Lorem Ipsum',
      type: 'TYPE',
      Note: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean',
      a: 'View All',
      Price: '1 Eth',
      total: '9.999',
      date: 'feb ob ,2022 00:00:00',
      Day: '00',
      Mrs: '000',
      Min: '000',
      Sec: '000',
    },
  ]
  const tr = [
    {
      key: '1',
      title: 'Mon',
    },
    {
      key: '2',
      title: 'Mon',
    },
    {
      key: '3',
      title: 'Mon',
    },
    {
      key: '4',
      title: 'Mon',
    },
    {
      key: '5',
      title: 'Mon',
    },
    {
      key: '6',
      title: 'Mon',
    },
    {
      key: '7',
      title: 'Mon',
    },
  ]
  return (
    <>
      <div className="Caledar_box">
        <h1>NFT Drops</h1>
        <Layout className="Caledar_Lorem">
          {arrs.map((item) => {
            return (
              <>
                <div className="calendar_item">
                  <div className="item_avatar"></div>
                  <div className="item_project_name">{item.projectName}</div>
                  <div className="item_project_type">{item.type}</div>
                  <div className="item_project_note">
                    <p>{item.Note}</p>
                  </div>
                  <div className="item_line"></div>
                  <div className="item_price_group">
                    <div className="item_project_price">
                      <p>Price</p>
                      <p>1 ETH</p>
                    </div>
                    <div className="item_project_total">
                      <p>Price</p>
                      <p>1 ETH</p>
                    </div>
                    <div className="item_project_date">
                      <p>Price</p>
                      <p>1 ETH</p>
                    </div>
                  </div>5
                </div>
              </>
            )
          })}
        </Layout>
      </div>
      <div className='caleder_footer'>
         <CaledarDate/>
      </div>
    </>
  )
}
