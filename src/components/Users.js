import React, { useEffect } from 'react'
import {Row,Skeleton,Card,Typography,Table,Button} from 'antd'
import {CheckOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../action/users';
import AlertMsg from './Alert'


const columns =[
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Role',
        dataIndex: 'admin',
        key: 'admin',
    },
    {
        title: 'Make Admin',
        dataIndex: 'settings',
        key: 'settings',
    },
]
const {Title} = Typography
const Users = () => {
    const dispatch = useDispatch()
    const {loading,users,error} = useSelector(state=> state.userList)
   
    useEffect(()=>{
        dispatch(getUsers())   
    },[dispatch])


    return (
       <>
        <Title level={3}>Users</Title>
        <Row  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {error && <AlertMsg description={error}/>}
            <Card style={{width:'100%'}}>
                {loading? <Skeleton active/>:  <Table dataSource={users.map(el => ({
                    id:el._id, name:el.username, email:el.email, admin: el.role, settings:el.role === 'admin'? '':
                    <Button><CheckOutlined style={{color:'green'}} /></Button>
                }))} columns={columns}/> }
           
            </Card>
           
        </Row>
       </>
    )
}

export default Users
