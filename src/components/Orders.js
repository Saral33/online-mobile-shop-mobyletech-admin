import React, { useEffect, useState } from 'react';
import { Row, Skeleton, Card, Typography, Table, Button, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import AlertMsg from './Alert';
import { getOrders, approveOrder } from '../action/orders';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { APPROVE_ORDER_RESET } from '../config/actiontypes';

const columns = [
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
];
const { Title, Text } = Typography;

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orderList);
  const {
    success,
    loading: approveLoading,
    error: approveError,
  } = useSelector((state) => state.approveOrders);
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    dispatch({ type: APPROVE_ORDER_RESET });
    dispatch(getOrders());
    if (success) {
      setVisible(false);
    }
  }, [dispatch, success]);

  const approveHandler = (id) => {
    setId(id);
    setVisible(true);
  };
  return (
    <>
      <Title level={3}>Orders</Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {error && <AlertMsg description={error} />}
        {approveError && <AlertMsg description={approveError} />}
        <Card style={{ width: '100%' }}>
          {loading ? (
            <Skeleton active />
          ) : (
            <Table
              scroll={{ x: 760 }}
              size="small"
              dataSource={orders.map((el) => ({
                key: el._id,
                id: el._id,
                name: 'Laura',
                address: el.address,
                paid: el.isPaid ? (
                  <CheckOutlined style={{ color: 'green' }} />
                ) : (
                  <CloseOutlined style={{ color: 'red' }} />
                ),
                approved: el.isApproved ? (
                  <CheckOutlined style={{ color: 'green' }} />
                ) : (
                  <CloseOutlined style={{ color: 'red' }} />
                ),
                total: `$${el.totalamount}`,
                date: el.updatedAt.split('T')[0],
                setting: !el.isApproved ? (
                  <Button onClick={() => approveHandler(el._id)} type="primary">
                    Approve
                  </Button>
                ) : (
                  <Button disabled>Approved</Button>
                ),
              }))}
              columns={columns}
            />
          )}
        </Card>
        <Modal
          centered
          visible={visible}
          okText="Approve"
          onOk={() => dispatch(approveOrder(id))}
          destroyOnClose
          confirmLoading={approveLoading}
          onCancel={() => setVisible(false)}
          title="Approve Order"
        >
          <p>
            Do you sure want to approve this order with ID{' '}
            <Text strong>{id}</Text>?{' '}
          </p>
        </Modal>
      </Row>
    </>
  );
};

export default Orders;
