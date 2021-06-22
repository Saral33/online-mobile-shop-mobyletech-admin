import React, { useEffect } from 'react';
import { Table, Skeleton } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getRecentSales } from '../action/orders';
import AlertMsg from './Alert';

const column = [
  {
    title: 'SN',
    dataIndex: 'sn',
    key: 'sn',
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Qty',
    dataIndex: 'qty',
    key: 'qty',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
];

const TableComponent = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector(
    (state) => state.recentOrderList
  );
  useEffect(() => {
    dispatch(getRecentSales());
  }, [dispatch]);
  return loading ? (
    <Skeleton active />
  ) : error ? (
    <AlertMsg description={error} />
  ) : (
    <Table
      dataSource={orders.map((el, index) => ({
        key: el._id,
        sn: index + 1,
        product: el.price_data.product_data.name,
        qty: el.quantity,
        amount: (el.quantity * el.price_data.unit_amount_decimal) / 100,
      }))}
      columns={column}
    />
  );
};

export default TableComponent;
