import Title from 'antd/lib/typography/Title';
import React, { useState } from 'react';
import { Form, Input, Button, Row, Upload, Space } from 'antd';
import axios from 'axios';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 12 },
};

const ProductForm = () => {
  const [versions, setVersion] = useState([{ version: '', price: '' }]);

  const handleChange = async ({ fileList }) => {
    if (fileList.length > 0) {
      const file = fileList[0].originFileObj;
      console.log(file);
      // const formData = new FormData();
      // formData.append('image', file);
      // const config = {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // };
      // try {
      //   const res = await axios.post(
      //     '/api/users/upload/avatar',
      //     formData,
      //     config
      //   );
      //   console.log(res);
      // } catch (error) {
      //   console.log(error.response);
      // }
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

  return (
    <>
      <Title level={3}>Create Product</Title>
      <Row
        style={{ marginTop: '20px' }}
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Form style={{ width: '100%' }} {...layout}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Product should have name' }]}
          >
            <Input size="large" placeholder="Eg: Samsung Galaxy A7" />
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
            <Input size="large" type="number" placeholder="Eg: 1-100" />
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
            <Input size="large" placeholder="Eg: IPS LCD, 6.53, Full HD+" />
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
            <Input size="large" placeholder="Eg: Android 11" />
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
            <Input size="large" placeholder="Eg: 8 GB" />
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
            <Input size="large" placeholder="Eg: 16 MP" />
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
              placeholder="Your phone details (Max 160 words, Min 20 words)"
            />
          </Form.Item>
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
              showUploadList={{ showRemoveIcon: false }}
            >
              <Button>Click to upload</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Row>
    </>
  );
};

export default ProductForm;
