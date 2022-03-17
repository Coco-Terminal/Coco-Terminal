import React from 'react'
import { Layout, Menu } from 'antd'
import './index.css'

import { Button } from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons'
import { HashRouter, Link } from 'react-router-dom'

const { Sider } = Layout

//模拟数组结构
const menuList = [
  {
    key: '#NFT',
    title: 'NFT',
    children: [
      {
        url: '#',
        key: 1,
        title: 'Watchlist',
      },
      {
        url: '/Calendar',
        key: 2,
        title: 'Calendar',
      },
      {
        url: '/trending',
        key: 3,
        title: 'Trending',
      },
    ],
  },
  {
    key: '#Dashboard',
    title: 'Dashboard',
    children: [
      {
        url: '#',
        key: 4,
        title: 'My Wallet',
      },
      {
        url: '#',
        key: 5,
        title: 'Token',
      },
    ],
  },
  {
    key: '#Social',
    title: 'Social',
    children: [
      {
        url: '#',
        key: 6,
        title: 'Forum',
      },
    ],
  },
]

export default function SideMenu(props: any) {
  const renderMenu = (menuList: any[]) => {
    return menuList.map((item, index) => {
      if (item.children) {
        return (
          <Menu.ItemGroup key={item.key} title={item.title}>
            {item.children.map((child: any) => {
              return (
                <Menu.Item key={child.key}>
                  <HashRouter>
                    <Link to={child.url}>{child.title}</Link>
                  </HashRouter>
                </Menu.Item>
              )
            })}
          </Menu.ItemGroup>
        )
      }

      return (
        <HashRouter>
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.key}>{item.title}</Link>
          </Menu.Item>
        </HashRouter>
      )
    })
  }
  return (
    <>
      {/* <Sider trigger={null} collapsible collapsed={false} className="sizemenu"> */}

      {/* </Sider> */}

      <Sider
        breakpoint="xl"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
        className="sizemenu"
      >
        <div className="logo">
          <img src="https://www.theapis.xyz/static/img/apis_logo.png" alt="" />
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['3']}>
          {renderMenu(menuList)}
        </Menu>
        <div>
          <div className="sizdmenu_div">
            <div className="sizdmenu_div_one">
              <span>
                <ArrowUpOutlined />
              </span>
              <h1>Get premium Now!</h1>
              <Button className="sizdmenubutton"> UPGRADE</Button>
            </div>
          </div>
        </div>
      </Sider>
    </>
  )
}
