import React from 'react'
import { Layout, Menu } from 'antd';
import './index.css'
import {withRouter} from 'react-router-dom'
import { Avatar } from 'antd';

import { 
  UserOutlined
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu

//模拟数组结构
const  menuList = [
  {
    key:"/home",
    title:"NFT",
    children:[
      {
        key:'/home/Watchlist',
        title:"Watchlist"
      },
      {
        key:'/home/Caledar',
        title:'Caledar'
      },
      {
        key:"/home/Trende",
        title:"Trende"
      }
    ]
  },
  {
    key:"/user-manage",
    title:"Dashboard",
  
    children:[
      {
        key:"/user-manage/list",
        title:"MY wallet",
    
      },
      {
        key:"/user-manage/Token",
        title:"Token"
      }
    ]
  },
  {
    key:"/right-manage",
    title:"Socal",
  
    children:[
      {
        key:"/right-manage/role/list",
        title:" Forum",
   
      }
    ]
  }
]

function SideMenu(props:any) {

  const renderMenu = (menuList: any[])=>{
    return menuList.map(item=>{
      if(item.children){
        return <SubMenu key={item.key} icon={item.icon} title={item.title}>
           { renderMenu(item.children) }
        </SubMenu>
      }

      return <Menu.Item key={item.key} icon={item.icon} onClick={()=>{
        props.history.push(item.key)
      }}>{item.title}</Menu.Item>
    })
  }
  return (
    
    <Sider trigger={null} collapsible collapsed={false}
    className="sizemenu"
    >
      <div className="logo" >
      <Avatar size={64} icon={<UserOutlined />} />
      </div>
      <p className='sizdmenu'>name</p>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['3']}>
          {renderMenu(menuList)}
      </Menu>
    </Sider>
  
  )
}
export default withRouter(SideMenu)