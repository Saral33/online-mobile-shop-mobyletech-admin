import React from 'react'
import {Layout} from 'antd'

import HeaderNav from '../components/Header'
import SideBar from '../components/SideBar'
import { Route,Switch} from 'react-router-dom'

import Product from '../components/Product'
import Users from '../components/Users'
import DashBoard from '../components/DashBoard'


const AdminScreen = () => {
    return (
        <Layout>
            <HeaderNav/>
           <Layout style={{minHeight:'100vh'}}>
            <SideBar/>
            <Layout className='container' style={{ paddingTop:'50px',paddingBottom:'70px' }}>
                <Switch>
                <Route exact path='/admin' component={DashBoard}/>
                <Route  path='/products' component={Product}/>
                <Route path = '/users' component = {Users}/>
                </Switch>
             </Layout>
           </Layout>
        </Layout>
    )
}

export default AdminScreen
