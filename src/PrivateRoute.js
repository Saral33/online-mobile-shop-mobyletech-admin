import React from 'react'
import { useSelector } from 'react-redux'
import {Redirect,Route} from 'react-router-dom'

const PrivateRoute = ({history,component: Component, ...rest}) => {
  
    const {success,loading} = useSelector(state=> state.auth)
    
   

    return ( 
        !loading && !success ? <Redirect to ='/login'/> :
        !loading && (
            <Route
            {...rest}
            render={props =>
                 success && (
                    <Component {...props} {...rest} />
                ) 
                }
        />
        )
    )  
    
}

export default PrivateRoute
