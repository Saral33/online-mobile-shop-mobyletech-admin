import React, { useEffect, useState } from "react";
import { Row, Skeleton, Card, Typography, Table, Button, Modal } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../action/users";
import AlertMsg from "./Alert";
import axios from "axios";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Role",
    dataIndex: "admin",
    key: "admin",
  },
  {
    title: "Make Admin",
    dataIndex: "settings",
    key: "settings",
  },
];
const { Title } = Typography;
const Users = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.userList);
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, success]);

  const approveHandler = (id) => {
    setId(id);
    setVisible(true);
  };

  const adminHandler = async () => {
    setSuccess(false);
    setLoading(true);
    try {
      await axios.put(`/api/admin/role/${id}`);
      setLoading(false);
      setSuccess(true);
      setVisible(false);
    } catch (error) {
      setSuccess(false);
      setLoading(false);
      setVisible(false);
    }
  };

  return (
    <>
      <Title level={3}>Users</Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {error && <AlertMsg description={error} />}
        <Card style={{ width: "100%" }}>
          {loading ? (
            <Skeleton active />
          ) : (
            <Table
              dataSource={users.map((el) => ({
                id: el._id,
                name: el.username,
                email: el.email,
                admin: el.role,
                settings:
                  el.role === "admin" ? (
                    ""
                  ) : (
                    <Button onClick={() => approveHandler(el._id)}>
                      <CheckOutlined style={{ color: "green" }} />
                    </Button>
                  ),
              }))}
              columns={columns}
            />
          )}
        </Card>
        <Modal
          centered
          visible={visible}
          okText="Change"
          onOk={() => adminHandler()}
          destroyOnClose
          confirmLoading={confirmLoading}
          onCancel={() => setVisible(false)}
          title="Make admin"
        >
          <p>
            {" "}
            Admin can access database,dashboard and change other and view/edit
            products.
          </p>
          <p>Do you sure want to make this user admin?</p>
        </Modal>
      </Row>
    </>
  );
};

export default Users;
