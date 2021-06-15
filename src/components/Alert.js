import React from 'react'
import {Alert} from 'antd'

const AlertMsg = ({type,msg}) => {
    return (
       <Alert type={type} message="Error" description={msg} showIcon banner />
    )
}


AlertMsg.defaultProps ={
    type: 'error'
}
export default AlertMsg
