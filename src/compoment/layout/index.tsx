import { Layout, Menu, Breadcrumb } from 'antd'
import { constants } from 'http2'
import React, { useState } from 'react'
import HeaderItem from './headerItem'
import SiderItem from './siderItem'
const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

export default function Layouts(children: any) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderItem></SiderItem>
      <Layout className="site-layout">
        <HeaderItem></HeaderItem>
        {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
        <Content style={{ margin: '0 16px' }}>{children}</Content>
      </Layout>
    </Layout>
  )
}
