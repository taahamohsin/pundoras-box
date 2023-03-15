import React, { useEffect, useState } from 'react';
import { Button, Layout, Space, Table } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';

import Form from './UserForm';
import DeleteConfirmation from './DeleteConfirmation';
import getBaseUrl from './utils';
const { Content } = Layout;

const toSentenceCase = str => {
  const spaced = str.replace(/([A-Z])/g,' $1');
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
};

const baseUrl = getBaseUrl();

const Admin = () => {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const fetchData = async() => {
    const raw = await fetch(`${baseUrl}/users`);
    const data = await raw.json();
    setUserData(data);
  };

  useEffect(() =>  {
    fetchData();
  }, []);


  const deleteButton = (user) => (
    <Button
      type="primary"
      shape="circle"
      icon={<DeleteTwoTone />}
      onClick={() => {
        setSelectedUser(user);
        setShowConfirmation(true);
      }}
    />
  );

  const editButton = (user) => (
    <Button
      type="primary"
      shape="circle"
      icon={<EditTwoTone />}
      onClick={() => {
        setSelectedUser(user);
        setShowModal(true);
      }}
    />
  );

  const tableColumns = userData && userData.length && [
    ...Object.keys(userData[0]).filter(
      (col) => !['imgUrl', 'score'].includes(col)).map((col, index) =>({
       key: index,
       dataIndex: col,
       title: toSentenceCase(col),
      })),
      {
        key: Object.keys(userData[0]).length,
        title: 'Actions',
        render: (user) => (
          <Space>
            {editButton(user)}
            {deleteButton(user)}
          </Space>
        )
      }
    ];

  const onSubmit = async (values) => {
    await fetch(`${baseUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values),
    });
    setShowModal(false);
    fetchData();
  };

  const onDelete = async () => {
    await fetch(`${baseUrl}/users/${selectedUser && selectedUser.id}`, {
      method: 'DELETE',
    });
    fetchData();
  };

  const onEdit = async (user) => {
    await fetch(`${baseUrl}/users/${selectedUser && selectedUser.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
    });
    fetchData();
  }

  return (
    <Content>
      <Table columns={tableColumns} dataSource={userData} />
      <Button
        type="primary"
        onClick={() => setShowModal(true)}
      >
        Add a new user
        </Button>
      <Form onSubmit={selectedUser ? onEdit : onSubmit} visible={showModal} onCancel={() => setShowModal(false)} initialValues={selectedUser} />
      <DeleteConfirmation
          onSubmit={onDelete}
          onCancel={() => setShowConfirmation(false)}
          isVisible={showConfirmation}
          title={`Remove ${selectedUser && selectedUser.firstName}`}
          prompt={`Are you sure you want to remove ${selectedUser && selectedUser.firstName} from the tracker? Their jokes will also be deleted as a consequence of this.`}
        />
    </Content>
  );
}

export default Admin;