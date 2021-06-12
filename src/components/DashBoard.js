import React from 'react'
import {Row,Col,Card,Typography,Space, Statistic} from 'antd'
import {LaptopOutlined,UserOutlined,ShoppingOutlined,ArrowUpOutlined} from '@ant-design/icons';
import TableComponent from './TableComponent';
import Calender from './Calender';

const DashBoard = () => {
    const {Title, Text} = Typography
    return (
        <>
        <Title level={3}>Admin's Dashboard</Title>
        <Space direction="vertical">
        <Row  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            
           <Col md= {8} sm={24} xs={24}>
               <Card style={{textAlign:'center',backgroundColor:'#27ae60'}}>
                    <Title level={1}  style={{color:'#fff'}}>920</Title>
                   <Text style={{color:'#fff'}}> <LaptopOutlined/> Total Products</Text>
               </Card>
           </Col>
           <Col md= {8} sm={24} xs={24}>
               <Card style={{textAlign:'center',backgroundColor:'#2c3e50'}}>
                    <Title level={1}  style={{color:'#fff'}}>480</Title>
                   <Text style={{color:'#fff'}}><UserOutlined/> Total Users</Text>
               </Card>
           </Col>
           <Col md= {8} sm={24} xs={24}>
               <Card style={{textAlign:'center',backgroundColor:'#8e44ad'}}>
                    <Title level={1}  style={{color:'#fff'}}>79</Title>
                   <Text style={{color:'#fff'}}><ShoppingOutlined/> Total Orders</Text>
               </Card>
           </Col>
           
         </Row>   
        <Row style={{marginTop:'19px'}}>
         <Card style={{width:'100%'}}>
             <Title level={3}>Recent Sales</Title>
            <TableComponent/>
         </Card>
        </Row>

        <Card style={{width:'100%',marginTop:'19px'}}>
        <Row  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
               
                <Col md= {10} sm={24}>
                <Title level={3}>Daily statistics</Title>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col md= {12}>
                        <Card>
                            <Statistic
                            title="Users"
                            value={2.3}
                            precision={2}
                            valueStyle={{color:'#009432'}}
                            prefix={<ArrowUpOutlined/>}
                            suffix='%'
                            />
                        </Card>
                    </Col>
                    <Col md= {12}>
                        <Card>
                        <Statistic
                            title="Orders"
                            value={1.5}
                            precision={2}
                            valueStyle={{color:'#009432'}}
                            prefix={<ArrowUpOutlined/>}
                            suffix='%'
                            />
                        </Card>
                  
                    </Col>
                </Row>
                </Col>
                
                <Col md={14} sm={24}>
                    <Calender/>
                </Col>
              
        </Row>
        </Card>
        </Space>
        </>
    )
}

export default DashBoard
