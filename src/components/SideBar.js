import React, { useState } from 'react'
import {Layout, Menu} from 'antd'
import {DashboardOutlined,LaptopOutlined,UserOutlined,ShoppingOutlined,SettingOutlined} from '@ant-design/icons';

const SideBar = () => {

    

    return (
        
            <Layout.Sider breakpoint='lg'  collapsible collapsedWidth="0" width={200} className="site-layout-background">
                
            <Menu theme='dark' mode="inline" style={{ height: '100%', borderRight: 0 }}>
            
                <Menu.Item key='1'>
                    <DashboardOutlined/>  Dashboard</Menu.Item>
                <Menu.Item key='2'><LaptopOutlined/> Products</Menu.Item>
                <Menu.Item key='3'><UserOutlined /> Users</Menu.Item>
                <Menu.Item key='4'><ShoppingOutlined /> Orders</Menu.Item>
                <Menu.Item key='5'><SettingOutlined/> Settings</Menu.Item>
            </Menu>

            </Layout.Sider>
        
    )
}

export default SideBar
