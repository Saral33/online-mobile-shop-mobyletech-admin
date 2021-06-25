import Title from 'antd/lib/typography/Title';
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Row, Upload, Space } from 'antd';
import axios from 'axios';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import AlertMsg from './Alert';
import { CREATE_PRODUCTS_RESET } from '../config/actiontypes';
import { createProduct } from '../action/products';

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 12 },
};

const ProductForm = ({ history }) => {
  const dispatch = useDispatch();
  const { success, error, loading } = useSelector(
    (state) => state.createProductAction
  );

  useEffect(() => {
    if (success) {
      history.push('/products');
      dispatch({ type: CREATE_PRODUCTS_RESET });
    }
  }, [success, history, dispatch]);
  //For multidata form only
  const [versions, setVersion] = useState([{ version: '', price: '' }]);
  const [colors, setColor] = useState([{ color: '', image: '' }]);
  const [index, SetIndex] = useState(0);
  const [colorImgLoading, setColorImgLoading] = useState(false);

  //For other simple filed
  const [name, setName] = useState('');
  const [mainImgLoading, setMainImgLoading] = useState(false);
  const [qty, setQty] = useState(null);
  const [brand, setBrand] = useState('');
  const [screen, setScreen] = useState('');
  const [os, setOS] = useState('');
  const [ram, setRam] = useState('');
  const [description, setDescription] = useState('');
  const [fCamera, setFCamera] = useState('');
  const [bCamera, setBCamera] = useState('');
  const [mainImage, setMainImage] = useState('');

  const handleChange = async ({ fileList }) => {
    if (fileList.length > 0) {
      setMainImgLoading(true);
      const file = fileList[0].originFileObj;

      const formData = new FormData();
      formData.append('image', file);
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      try {
        const res = await axios.post(
          '/api/admin/product-image',
          formData,
          config
        );
        console.log(res.data);
        setMainImage(res.data.image);
        setMainImgLoading(false);
      } catch (error) {
        setMainImgLoading(false);
        console.log(error.response);
      }
    }
  };

  const versionHandler = (index, val) => {
    const arr = [...versions];
    if (arr[index]) {
      arr[index].version = val;
    } else {
      arr.push({ version: val });
    }
    setVersion(arr);
  };
  const priceHandler = (index, val) => {
    const arr = [...versions];
    if (arr[index]) {
      arr[index].price = val;
    } else {
      arr.push({ price: val });
    }
    setVersion(arr);
  };
  const colorHandler = (index, val) => {
    const arr = [...colors];
    if (arr[index]) {
      arr[index].color = val;
    } else {
      arr.push({ color: val });
    }
    setColor(arr);
  };
  const colorImageHandler = async ({ fileList }) => {
    if (fileList.length > 0) {
      setColorImgLoading(true);
      const file = fileList[0].originFileObj;
      const formData = new FormData();
      formData.append('image', file);
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      try {
        const res = await axios.post(
          '/api/admin/product-image',
          formData,
          config
        );

        const arr = [...colors];
        if (arr[index]) {
          arr[index].image = res.data.image;
        } else {
          arr.push({ image: res.data.image });
        }
        setColorImgLoading(false);
        setColor(arr);
        console.log(colors);
      } catch (e) {
        setColorImgLoading(false);
        console.log(e);
      }
    }
  };
  const submitHandler = () => {
    dispatch(
      createProduct({
        name,
        os,
        mainImage,
        brand,
        colors,
        version: versions,
        quantity: qty,
        screen,
        ram,
        rearCamera: bCamera,
        frontCamera: fCamera,
        description,
      })
    );
  };
  return (
    <>
      <Title level={3}>Create Product</Title>
      <Row
        style={{ marginTop: '20px' }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        \{error && <AlertMsg description={error} />}
        <Form style={{ width: '100%' }} {...layout} onFinish={submitHandler}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Product should have name' }]}
          >
            <Input
              size="large"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Eg: Samsung Galaxy A7"
            />
          </Form.Item>
          <Form.Item
            name="qty"
            label="Quantity"
            rules={[
              {
                required: true,
                message: 'Product should have quantity in number',
              },
            ]}
          >
            <Input
              size="large"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              type="number"
              placeholder="Eg: 1-100"
            />
          </Form.Item>
          <Form.Item
            name="brand"
            label="Brand"
            rules={[
              {
                required: true,
                message: 'Product should have valid brand',
              },
            ]}
          >
            <Input
              size="large"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Eg: Samsung,Oppo,Vivo,Xiaomi....."
            />
          </Form.Item>
          <Form.Item
            name="screen"
            label="Screen"
            rules={[
              {
                required: true,
                message: 'Product should have details about screen',
              },
            ]}
          >
            <Input
              size="large"
              value={screen}
              onChange={(e) => setScreen(e.target.value)}
              placeholder="Eg: IPS LCD, 6.53, Full HD+"
            />
          </Form.Item>
          <Form.Item
            name="os"
            label="OS"
            rules={[
              {
                required: true,
                message: 'Product should have details about os',
              },
            ]}
          >
            <Input
              size="large"
              value={os}
              onChange={(e) => setOS(e.target.value)}
              placeholder="Eg: Android 11"
            />
          </Form.Item>
          <Form.Item
            name="RAM"
            label="RAM"
            rules={[
              {
                required: true,
                message: 'Product should have details about RAM',
              },
            ]}
          >
            <Input
              size="large"
              value={ram}
              onChange={(e) => setRam(e.target.value)}
              placeholder="Eg: 8 GB"
            />
          </Form.Item>
          <Form.Item
            name="front camera"
            label="Front Camera"
            rules={[
              {
                required: true,
                message: 'Product should have details about front camera',
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Eg: 16 MP"
              value={fCamera}
              onChange={(e) => setFCamera(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="rear camera"
            label="Rear Camera"
            rules={[
              {
                required: true,
                message: 'Product should have details about rear camera',
              },
            ]}
          >
            <Input
              value={bCamera}
              onChange={(e) => setBCamera(e.target.value)}
              size="large"
              placeholder="Eg: Main 64 MP & Secondary 8 MP, 5 MP"
            />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: 'Product should have description',
              },
            ]}
          >
            <Input.TextArea
              maxLength={160}
              minLength={20}
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Your phone details (Max 160 words, Min 20 words)"
            />
          </Form.Item>
          <Form.Item label="Color">
            <Form.List name="Color">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field, index) => (
                    <Space key={field.key} align="baseline">
                      <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, curValues) =>
                          prevValues.area !== curValues.area ||
                          prevValues.sights !== curValues.sights
                        }
                      >
                        {() => (
                          <Form.Item
                            {...field}
                            label="Color"
                            name={[field.name, 'color']}
                            fieldKey={[field.fieldKey, 'color']}
                            rules={[
                              { required: true, message: 'Missing field' },
                            ]}
                          >
                            <Input
                              onChange={(e) =>
                                colorHandler(index, e.target.value)
                              }
                              placeholder="Eg : red,pink,blue,black...."
                            />
                          </Form.Item>
                        )}
                      </Form.Item>
                      <Form.Item
                        {...field}
                        label="Image"
                        name={[field.name, 'image']}
                        fieldKey={[field.fieldKey, 'image']}
                      >
                        <Upload
                          beforeUpload={() => false}
                          listType="picture"
                          onChange={colorImageHandler}
                          maxCount={1}
                          showUploadList={
                            !colorImgLoading && { showRemoveIcon: false }
                          }
                        >
                          <Button
                            loading={colorImgLoading}
                            onClick={() => SetIndex(index)}
                          >
                            Click to upload
                          </Button>
                        </Upload>
                      </Form.Item>

                      <MinusCircleOutlined
                        onClick={() => {
                          remove(field.name);
                          const arr = [...versions];
                          arr.splice(index, 1);
                          setColor(arr);
                        }}
                      />
                    </Space>
                  ))}

                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add field
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form.Item>
          {/*         */}
          <Form.Item label="Version">
            <Form.List name="version">
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field, index) => (
                    <Space key={field.key} align="baseline">
                      <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, curValues) =>
                          prevValues.area !== curValues.area ||
                          prevValues.sights !== curValues.sights
                        }
                      >
                        {() => (
                          <Form.Item
                            {...field}
                            label="Version"
                            name={[field.name, 'sight']}
                            fieldKey={[field.fieldKey, 'sight']}
                            rules={[
                              { required: true, message: 'Missing field' },
                            ]}
                          >
                            <Input
                              onChange={(e) =>
                                versionHandler(index, e.target.value)
                              }
                              placeholder="ROM Eg: 64 GB"
                            />
                          </Form.Item>
                        )}
                      </Form.Item>
                      <Form.Item
                        {...field}
                        label="Price"
                        name={[field.name, 'price']}
                        fieldKey={[field.fieldKey, 'price']}
                        rules={[{ required: true, message: 'Missing price' }]}
                      >
                        <Input
                          placeholder="Eg: $400"
                          onChange={(e) => priceHandler(index, e.target.value)}
                        />
                      </Form.Item>

                      <MinusCircleOutlined
                        onClick={() => {
                          remove(field.name);
                          const arr = [...versions];
                          arr.splice(index, 1);
                          setVersion(arr);
                        }}
                      />
                    </Space>
                  ))}

                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add field
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form.Item>
          <Form.Item label="Main Image">
            <Upload
              beforeUpload={() => false}
              listType="picture"
              onChange={handleChange}
              maxCount={1}
              showUploadList={!mainImgLoading && { showRemoveIcon: false }}
            >
              <Button loading={mainImgLoading}>Click to upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              htmlType="submit"
              style={{ padding: '0 35px', fontSize: '18px' }}
              type="primary"
              loading={loading}
            >
              Create
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </>
  );
};

export default ProductForm;
