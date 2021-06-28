import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Col, Row, Typography, Skeleton, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getProductStats } from '../action/products';
import AlertMsg from './Alert';

const generateRandomNumber = () => {
  return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
};

const ProductStats = () => {
  const [avgStats, setAverageStat] = useState([
    { id: '', avgRating: '', avgPrice: '', maxPrice: '', minPrice: '' },
  ]);
  const [colors, setColors] = useState([]);
  const dispatch = useDispatch();
  const { loading, error, stats } = useSelector((state) => state.productStats);

  useEffect(() => {
    dispatch(getProductStats());
  }, [dispatch]);

  useEffect(() => {
    if (!loading) {
      const arr = [];
      stats?.map((stat) =>
        arr.push({
          id: stat._id,
          avgRating: stat.avgRating.toFixed(2),
          avgPrice: stat.avgPrice.toFixed(2),
          maxPrice: stat.maxPrice,
          minPrice: stat.minPrice,
        })
      );
      for (let i = 0; i < stats?.length; i++) {
        setColors((state) => [...state, generateRandomNumber()]);
      }
      setAverageStat(arr);
    }
    // eslint-disable-next-line
  }, [loading]);

  return (
    <>
      <Typography.Title level={3}>Product Statistics</Typography.Title>
      {loading ? (
        <Skeleton active />
      ) : error ? (
        <AlertMsg description={error} />
      ) : (
        <>
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ paddingTop: '30px' }}
          >
            <Col md={12} xs={24}>
              <Card>
                <Pie
                  data={{
                    labels: avgStats.map((el) => el.id),
                    datasets: [
                      {
                        label: 'Average rating',
                        data: avgStats.map((el) => el.avgRating),
                        backgroundColor: colors,
                        hoverOffset: 4,
                      },
                    ],
                  }}
                  width={300}
                  height={300}
                  options={{
                    maintainAspectRatio: false,
                    plugins: {
                      title: { display: true, text: 'Average ratings' },
                    },
                  }}
                />
              </Card>
            </Col>
            <Col md={12} xs={24}>
              <Card>
                <Pie
                  data={{
                    labels: avgStats.map((el) => el.id),
                    datasets: [
                      {
                        label: 'Average price',
                        data: avgStats.map((el) => el.avgPrice),
                        backgroundColor: colors,
                        hoverOffset: 4,
                      },
                    ],
                  }}
                  width={300}
                  height={300}
                  options={{
                    maintainAspectRatio: false,
                    plugins: {
                      title: { display: true, text: 'Average price ($)' },
                    },
                  }}
                />
              </Card>
            </Col>
            <Col md={12} xs={24} style={{ marginTop: '30px' }}>
              <Card>
                <Pie
                  data={{
                    labels: avgStats.map((el) => el.id),
                    datasets: [
                      {
                        label: 'Max price',
                        data: avgStats.map((el) => el.maxPrice),
                        backgroundColor: colors,
                        hoverOffset: 4,
                      },
                    ],
                  }}
                  width={300}
                  height={300}
                  options={{
                    maintainAspectRatio: false,
                    plugins: {
                      title: { display: true, text: 'Max price ($)' },
                    },
                  }}
                />
              </Card>
            </Col>
            <Col md={12} xs={24} style={{ marginTop: '30px' }}>
              <Card>
                <Pie
                  data={{
                    labels: avgStats.map((el) => el.id),
                    datasets: [
                      {
                        label: 'Min price',
                        data: avgStats.map((el) => el.minPrice),
                        backgroundColor: colors,
                        hoverOffset: 4,
                      },
                    ],
                  }}
                  width={300}
                  height={300}
                  options={{
                    maintainAspectRatio: false,
                    plugins: {
                      title: { display: true, text: 'Min price ($)' },
                    },
                  }}
                />
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductStats;
