import React from 'react'
import {Layout} from 'antd'

import HeaderNav from '../components/Header'
import SideBar from '../components/SideBar'
import { Route,Switch} from 'react-router-dom'

import Product from '../components/Product'
import Users from '../components/Users'
import DashBoard from '../components/DashBoard'
import Orders from '../components/Orders'


const AdminScreen = () => {
    return (
        <Layout>
            <HeaderNav/>
           <Layout style={{minHeight:'100vh'}}>
            <SideBar/>
            <Layout className='container' style={{ paddingTop:'50px',paddingBottom:'70px' }}>
                <Switch>
                <Route exact path='/' component={DashBoard}/>
                <Route  path='/products' component={Product}/>
                <Route path = '/users' component = {Users}/>
                <Route path = '/orders' component={Orders}/>
                </Switch>
             </Layout>
           </Layout>
        </Layout>
    )
}

export default AdminScreen
