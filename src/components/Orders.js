import React, { useEffect } from 'react'
import {Row,Skeleton,Card,Typography,Table,Button} from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import AlertMsg from './Alert'
import {getOrders} from '../action/orders'
import {CheckOutlined,CloseOutlined} from '@ant-design/icons';


const columns =[
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'User',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Paid',
        dataIndex: 'paid',
        key: 'paid',
    },
    {
        title: 'Approved',
        dataIndex: 'approved',
        key: 'approved',
    },
    {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: '',
        dataIndex: 'setting',
        key: 'setting',
    },
]
const {Title} = Typography
const Orders = () => {
        const dispatch = useDispatch()
        const {orders,loading,error} = useSelector(state=> state.orderList)
    useEffect(()=>{
        dispatch(getOrders())
    },[dispatch])
    return (
        <>
             <Title level={3}>Orders</Title>
        <Row  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {error && <AlertMsg description={error}/>}
            <Card style={{width:'100%'}}>
                {loading? <Skeleton active/>:  <Table dataSource={orders.map(el => ({
                    id:el._id, name:'Laura', address:el.address, paid: el.isPaid ? <CheckOutlined style={{color:'green'}}/> :
                    <CloseOutlined style={{color:'red'}}/>, approved:el.isApproved ? <CheckOutlined style={{color:'green'}}/>:
                     <CloseOutlined style={{color:'red'}}/>,
                    total:  `$${el.totalamount}`, date:el.updatedAt.split('T')[0],
                    setting: !el.isApproved? <Button type="primary">Approve</Button> : <Button disabled>Approved</Button>
                    
                }))} columns={columns}/> }
           
            </Card>
           
        </Row>
        </>
    )
}

export default Orders
