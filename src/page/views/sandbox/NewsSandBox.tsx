import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import Home from './home/Home'
import Nopermission from './nopermission/Nopermission'
import RightList from './right-manage/RightList'
import RoleList from './right-manage/RoleList'
import UserList from './user-manage/UserList'
import Wactlist from './right-manage/Wactlist'
import Caledar   from './right-manage/Caledar'

//css
import './NewsSandBox.css'

//antd
import { Layout } from 'antd'
const {Content} = Layout

export default function NewsSandBox() {
    return (
    <div>
     
        <Layout>  
            <SideMenu></SideMenu>
            <Layout className="site-layout">
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: '0',
                        minHeight: 280,
                    }}
                >
                       <TopHeader/>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path ='/Watchlist' component={Wactlist}/>
                        <Route path='/Caledar' component ={Caledar}/>
                        <Route path="/user-manage/list" component={UserList} />
                        <Route path="/right-manage/role/list" component={RoleList} />
                        <Redirect from="/" to="/home" exact />
                        <Route path="*" component={Nopermission} />
                    </Switch>
                </Content>
            </Layout>
        </Layout>
        
    </div>
    )
    
}
