import React from 'react'
import { Layout, Menu } from 'antd'
import './index.css'

import { Button } from 'antd'
import { ArrowUpOutlined } from '@ant-design/icons'
import logoImg from '../../../assets/logo.png'

const { Sider } = Layout
const { SubMenu } = Menu

//模拟数组结构
const menuList = [
  {
    key: '/home',
    title: 'NFT',
    children: [
      {
        key: '/Caledar',
        title: 'Caledar',
      },
      {
        key: '/home/Trende',
        title: 'Trende',
      },
    ],
  },

  {
    key: '/right-manage',
    title: 'Socal',

    children: [
      {
        key: '/right-manage/role/list',
        title: ' Forum',
      },
    ],
  },
]

export default function SideMenu(props: any) {
  const renderMenu = (menuList: any[]) => {
    return menuList.map((item) => {
      if (item.children) {
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {renderMenu(item.children)}
          </SubMenu>
        )
      }

      return (
        <Menu.Item
          key={item.key}
          icon={item.icon}
          onClick={() => {
            props.history.push(item.key)
          }}
        >
          {item.title}
        </Menu.Item>
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
        <div style={{ width: '5rem ', marginTop: '1rem' }}>
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
