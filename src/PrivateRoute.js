import React from 'react'
import {Redirect,Route} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {

   const auth = localStorage.getItem('authenticated')? JSON.parse(localStorage.getItem('authenticated')) : false
    
   

    return (
        <Route
        {...rest}
        render={props =>
            auth ? (
                <Component {...props} {...rest} />
            ) : (
                    <Redirect
                    to={{
                        pathname: "/",
                        state: {
                          from: props.location
                        }
                    }}
                    />
                )
            }
    />
    )
}

export default PrivateRoute
