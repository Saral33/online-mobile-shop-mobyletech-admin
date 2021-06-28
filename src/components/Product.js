import Title from 'antd/lib/typography/Title';
import { Row, Button, Card, Skeleton, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../action/products';
import { PlusOutlined } from '@ant-design/icons';
import AlertMsg from './Alert';

const columns = [
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
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
  },
  {
    title: 'Qty',
    dataIndex: 'qty',
    key: 'qty',
  },
  {
    title: 'Ratings',
    dataIndex: 'ratings',
    key: 'ratings',
  },
  {
    title: 'Sales',
    dataIndex: 'sales',
    key: 'sales',
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand',
  },
];

const Product = ({ history }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const { loading, products, error } = useSelector(
    (state) => state.productList
  );
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (!loading) {
      const arr = [];
      products.map((el) =>
        arr.push({
          key: el._id,
          id: el._id,
          name: el.name,
          image: (
            <img
              src={`${el.mainImage}`}
              alt="products"
              style={{ height: '40px', width: '40px' }}
            />
          ),
          qty: el.quantity,
          ratings: el.ratings,
          sales: el.sale,
          brand: el.brand,
        })
      );
      setData(arr);
    }
    // eslint-disable-next-line
  }, [loading]);

  return (
    <>
      <Title level={3}>Products</Title>
      {loading ? (
        <Skeleton active />
      ) : error ? (
        <AlertMsg msg={error} />
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              onClick={() => history.push('/newproducts')}
              icon={<PlusOutlined />}
            >
              Add New Products
            </Button>
          </div>
          <Row
            style={{ marginTop: '20px' }}
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Card style={{ width: '100%' }}>
              <Table
                pagination={{ pageSize: 6 }}
                scroll={{ x: 770 }}
                dataSource={data}
                columns={columns}
              />
            </Card>
          </Row>
        </>
      )}
    </>
  );
};

export default Product;
