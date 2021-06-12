import React from 'react'
import {Layout, Menu} from 'antd'
import {DashboardOutlined,LaptopOutlined,UserOutlined,ShoppingOutlined,SettingOutlined} from '@ant-design/icons';
import { withRouter } from 'react-router-dom';

const SideBar = ({history}) => {

    
const clickHandler = (route)=>{
    history.push(route)
}
    return (
        
            <Layout.Sider breakpoint='lg'  collapsible collapsedWidth="0" width={200} className="site-layout-background">
                
            <Menu theme='dark' mode="inline" style={{ height: '100%', borderRight: 0 }}>
            
                <Menu.Item key='1' onClick={()=> clickHandler('/')}>
                    <DashboardOutlined/>  Dashboard</Menu.Item>
                <Menu.Item key='2' onClick={()=> clickHandler('/products')}><LaptopOutlined/> Products</Menu.Item>
                <Menu.Item key='3' onClick={()=> clickHandler('/users')}><UserOutlined /> Users</Menu.Item>
                <Menu.Item key='4' onClick={()=> clickHandler('/orders')}><ShoppingOutlined /> Orders</Menu.Item>
                <Menu.Item key='5' onClick={()=> clickHandler('/settings')}><SettingOutlined/> Settings</Menu.Item>
            </Menu>

            </Layout.Sider>
        
    )
}

export default withRouter(SideBar)
