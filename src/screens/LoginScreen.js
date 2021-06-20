import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Typography,Row,Col,Card} from 'antd';
import { KeyOutlined, UserOutlined,LockOutlined } from '@ant-design/icons';
import { useDispatch,useSelector } from 'react-redux';
import {loginAdmin} from '../action/auth'
import AlertMsg from '../components/Alert';

const {Title} = Typography

const LoginScreen = ({history}) => {

const dispatch = useDispatch()
const {success,error} = useSelector(state=> state.auth)
const [loading,setLoading] = useState(false)
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [code,setCode] = useState('')

useEffect(()=>{
  setLoading(false)
  if(success){
    history.push('/')
  }

},[history,success,error])

const submitHandler = ()=>{
  setLoading(true)
  dispatch(loginAdmin({email,password,code}))
  
}
    return (
       <Row className='login-main-screen' type="flex" justify="center" >
         <Col md={10} sm={18} xs={22}>
           
          <Card bordered={false} style={{backgroundColor:'#1A2327'}}>
          {error && <AlertMsg msg={error}/> }
            <Title level={1} type="success" style={{textAlign:'center'}}><KeyOutlined/></Title>
            <Title level={3} type="success" style={{textAlign:'center'}}>Admin Panel</Title>
            <Form onFinish={submitHandler} >
            
            <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
        
      >
        <Input onChange={e=> setEmail(e.target.value)} size='large' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email address" />
        </Form.Item>
        <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
        style={{marginTop:'20px'}}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          size='large'
          placeholder="Password"
          onChange= {e=> setPassword(e.target.value)}
        />
      </Form.Item>
   
        <Form.Item
        name="code"
        rules={[{ required: true, message: 'Please input your admin code!' }]}
        style={{marginTop:'20px'}}
      >
        <Input
          prefix={<KeyOutlined className="site-form-item-icon" />}
          type="password"
          size='large'
          placeholder="Admin Code"
          onChange={e=> setCode(e.target.value)}
        />
      </Form.Item>
        <Form.Item>
          <Button size="large" loading={loading} htmlType="submit" type="primary" style={{width:'100%'}}>Login</Button>
        </Form.Item>
      
            </Form>
          </Card>
         </Col>
       </Row>
    )
}

export default LoginScreen
