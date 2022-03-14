/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import './index.css'
import { Layout } from 'antd'

import {
  GlobalOutlined,
  TwitterOutlined,
  MessageOutlined,
  CalendarOutlined,
} from '@ant-design/icons'
import CaledarDate from '../../compoment/caledar/caledar-date'
import CaledarTable from '../../compoment/caledar/caledar-table'
export default function Caledar() {
  function onPanelChange(value: any, mode: any) {
    console.log(value, mode)
  }
  const arrs = [
    {
      key: '1',
      title: 'Lorem Ipsum',
      button: 'TYPE',
      text: 'Lorem ipsum gjsdashj gajksdhd jk dolor sit amet, consectetuer adipiscing elit. Aenean',
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
      title: 'Lorem Ipsum',
      button: 'TYPE',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean',
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
      title: 'Lorem Ipsum',
      button: 'TYPE',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean',
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
      title: 'Lorem Ipsum',
      button: 'TYPE',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean',
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
      title: 'Lorem Ipsum',
      button: 'TYPE',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean',
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
      title: 'Lorem Ipsum',
      button: 'TYPE',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean',
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
      title: 'Lorem Ipsum',
      button: 'TYPE',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean',
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
      title: 'Lorem Ipsum',
      button: 'TYPE',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean',
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
          {arrs.map((itme) => {
            return (
              <>
                <div className="Caledar_div" key={itme.key}>
                  <span className="Caledar_icon"></span>
                  <span className="Caledar_title">{itme.title}</span>
                  <div>
                    <p>{itme.text}</p>
                    <a href="#"> {itme.a}</a>
                  </div>
                  <div className="Caledar_time">
                    <div>
                      <span className="Caledar_Price"> Price</span>
                      <span className="Caledar_total"> total</span>
                      <span className="Caledar_data">Date</span>
                    </div>
                    <div>
                      <span className="Caledar_Price"> {itme.Price}</span>
                      <span className="Caledar_total"> {itme.total}</span>
                      <span className="Caledar_data">{itme.date}</span>
                    </div>
                  </div>
                  <div className="Caledar_time2">
                    <div>
                      <span className="Caledar_data">Day</span>
                      <span className="Caledar_data">Hrs</span>
                      <span className="Caledar_data">Min</span>
                      <span className="Caledar_data">Sec</span>
                    </div>
                    <div>
                      <span className="Caledar_data">{itme.Day}:</span>
                      <span className="Caledar_data">{itme.Mrs}:</span>
                      <span className="Caledar_data">{itme.Min}:</span>
                      <span className="Caledar_data">{itme.Sec}</span>
                    </div>
                  </div>
                  <div className="Caledar_footer">
                    <div>
                      <GlobalOutlined />
                    </div>
                    <div>
                      <TwitterOutlined />
                    </div>
                    <div>
                      <MessageOutlined />
                    </div>
                    <div className="Caledar_icon_lest">
                      <CalendarOutlined />
                    </div>
                    <a>Admine</a>
                  </div>
                </div>
              </>
            )
          })}
        </Layout>
      </div>
      <CaledarDate />
    </>
  )
}
