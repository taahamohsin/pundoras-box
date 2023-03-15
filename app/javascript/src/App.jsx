;import 'antd/dist/antd.css';
import React, { useEffect, useState, Fragment } from 'react';
import { Button, Layout, Menu, Table, Space } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import Form from './RatingForm.jsx';
import getBaseUrl from './utils';
const { Header, Content } = Layout;

const toSentenceCase = str => {
  const spaced = str.replace(/([A-Z])/g,' $1');
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
};

const baseUrl = getBaseUrl();

const App = () => {
  // const [userData, setUserData] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  // const [selectedUser, setSelectedUser] = useState(null);

  // const editButton = (user) => (
  //   <Button
  //   type="primary"
  //   shape="circle"
  //   icon={<EditTwoTone />}
  //   onClick={() => {
  //     setShowModal(true);
  //     setSelectedUser(user);
  //   }}
  //   />
  // );

  // const transformDataByRank = (data) => {
  //   data.sort((first, second) => second.score - first.score);
  //   const displayData = data.map(({imgUrl, ...rest}) => ({...rest}));
  //   return displayData.map((user, index) => ({
  //     key: index,
  //     rank: index + 1 ,
  //     ...user,
  //     actions: (
  //       <Space>
  //         {editButton(user)}
  //       </Space>
  //     )
  //   }));
  // };

  // const fetchData = async() => {
  //   console.log('FOO', `${baseUrl}/users`)
  //   const raw = await fetch(`${baseUrl}/users`);
  //   const data = await raw.json();
  //   setUserData(transformDataByRank(data));
  // };

  // useEffect(() =>  {
  //   fetchData();
  // }, []);

  // const tableColumns = userData && userData.length && [
  //    ...Object.keys(userData[0]).filter(
  //      (col) => !['imgUrl', 'id', 'key'].includes(col)).map((col, index) =>({
  //       key: index,
  //       dataIndex: col,
  //       title: toSentenceCase(col),
  //      })),
  // ];

  // const onSubmit = async (rating) => {
  //   await fetch(`${baseUrl}/users/${selectedUser.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(rating),
  //   });

  //   const { id, ...rest } = rating;

  //   await fetch(`${baseUrl}/jokes/`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       ...rest,
  //       userId: selectedUser && selectedUser.id,
  //       ratingId: id
  //     }),
  //   });
  //   setShowModal(false);
  //   setSelectedUser(null);
  //   fetchData();
  // };

  return (
  //  <Layout>
  //     <Content>
  //       <Table columns={tableColumns} dataSource={userData} />
  //       <Form onSubmit={onSubmit} visible={showModal} onCancel={() => setShowModal(false)} selectedUser={selectedUser} />
  //     </Content>
  //  </Layout>
  <div>FOO</div>
  );
}

export default App;
