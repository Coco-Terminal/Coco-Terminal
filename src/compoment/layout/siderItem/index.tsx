import React from 'react'
import { Layout, Menu } from 'antd'
import './index.css'

import { Button } from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons'
import logoImg from '../../../assets/logo.png'
import { HashRouter, Link } from 'react-router-dom'

const { Sider } = Layout
const { SubMenu } = Menu

//模拟数组结构
const menuList = [
  {
    key: '/',
    title: 'NFT',
    children: [
      {
        key: '/trending',
        title: 'Calendar',
      },
      {
        key: '/trending',
        title: 'Trending',
      },
    ],
  },

  //   {
  //     key: '/right-manage',
  //     title: 'Socal',

  //     children: [
  //       {
  //         key: '/right-manage/role/list',
  //         title: ' Forum',
  //       },
  //     ],
  //   },
]

export default function SideMenu(props: any) {
  const renderMenu = (menuList: any[]) => {
    return menuList.map((item, index) => {
      if (item.children) {
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {renderMenu(item.children)}
          </SubMenu>
        )
      }

      return (
        <HashRouter>
          <Menu.Item key={index} icon={item.icon}>
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
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
        className="sizemenu"
      >
        <div style={{ width: '5rem ', marginTop: '1rem', margin: '0 auto' }}>
          <img src={logoImg} alt="" style={{ width: '100% ' }} />
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['3']}>
          {renderMenu(menuList)}
        </Menu>
        <div className="sizdmenu_div">
          <div className="sizdmenu_div_one">
            <span>
              <ArrowUpOutlined />
            </span>
            <h1>Get Premlum Now!</h1>
            <Button className="sizdmenubutton">UFORACK</Button>
          </div>
        </div>
      </Sider>
    </>
  )
}
