import React from 'react'
import 'antd/dist/antd.css'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'

import AdminScreen from './screens/AdminScreen'
import LoginScreen from './screens/LoginScreen'

const App = () => {
    return (
        <Router>
        <Switch>
        <Route path ='/login' component ={LoginScreen}/>
        <Route path ='/' component= {AdminScreen}/>
        </Switch>
        </Router>
    )
}

export default App
