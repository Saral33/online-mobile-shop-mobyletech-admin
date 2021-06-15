import React, { useEffect } from 'react'
import 'antd/dist/antd.css'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import AdminScreen from './screens/AdminScreen'
import LoginScreen from './screens/LoginScreen'
import { loadUser } from './action/auth'
import PrivateRoute from './PrivateRoute'

const App = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadUser())
    },[dispatch])
    return (
        <Router>
        <Switch>
        <Route path ='/' component ={LoginScreen}/>
        <PrivateRoute path ='/admin' component= {AdminScreen}/>
        </Switch>
        </Router>
    )
}

export default App
