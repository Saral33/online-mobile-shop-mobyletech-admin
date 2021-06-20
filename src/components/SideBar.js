import React from 'react';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  LaptopOutlined,
  UserOutlined,
  ShoppingOutlined,
  SettingOutlined,
  PieChartOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';
import { withRouter } from 'react-router-dom';

const SideBar = ({ history }) => {
  const clickHandler = (route) => {
    history.push(route);
  };
  return (
    <Layout.Sider
      breakpoint='lg'
      collapsible
      collapsedWidth='0'
      width={200}
      className='site-layout-background'
    >
      <Menu
        theme='dark'
        mode='inline'
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item
          key='1'
          icon={<DashboardOutlined />}
          onClick={() => clickHandler('/')}
        >
          Dashboard
        </Menu.Item>
        <Menu.SubMenu key='sub1' title='Products' icon={<LaptopOutlined />}>
          <Menu.Item key='2' icon={<InfoCircleOutlined />} onClick={() => clickHandler('/products')}>
             Details
          </Menu.Item>
          <Menu.Item key='3' icon={<PieChartOutlined />} onClick={() => clickHandler('/products-stats')}>
             Statistic
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item key='4' icon={<UserOutlined />} onClick={() => clickHandler('/users')}>
           Users
        </Menu.Item>
        <Menu.Item key='5' icon={<ShoppingOutlined />} onClick={() => clickHandler('/orders')}>
           Orders
        </Menu.Item>
        <Menu.Item key='6' icon={<SettingOutlined />} onClick={() => clickHandler('/settings')}>
           Settings
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default withRouter(SideBar);
