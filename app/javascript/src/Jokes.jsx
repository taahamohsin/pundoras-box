import React, { useEffect, useState } from 'react';
import { Button, Layout, Table } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import StarFilled from "@ant-design/icons/es/icons/StarFilled";


import DeleteConfirmation from './DeleteConfirmation';
import getBaseUrl from './utils';
import { useLocation } from 'react-router-dom';


const { Content } = Layout;
const { Column, ColumnGroup } = Table;

const baseUrl = getBaseUrl();

const Jokes = () => {
  const [jokeData, setJokeData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [selectedJoke, setSelectedJoke] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const location = useLocation()

  const { state } = location;
  const { selectedUser } = state || {};

  const fetchData = async () => {
    const raw = await fetch(`${baseUrl}/users/${selectedUser.id}/jokes`);
    const rawData = await raw.json();
    const { jokes: data, firstName, lastName} = rawData;
    setJokeData(data.reverse());
    setUserData({ firstName, lastName })
  };
  useEffect(() => {
    fetchData();
  }, []);

  // const editButton = (rating) => (
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

  const deleteButton = (joke) => (
    <Button
    type="primary"
    shape="circle"
    icon={<DeleteTwoTone />}
    onClick={() => {
      setSelectedJoke(joke);
      setShowConfirmation(true);
    }}
    />
  );

  const onDelete = async () => {
    await fetch(`${baseUrl}/jokes/${selectedJoke && selectedJoke.id}`, {
      method: 'DELETE',
    });
    fetchData();
  };

  const sortByValue = (first, second) => first.value - second.value;

  return (
    <Layout>
      <Content>
        <Table dataSource={jokeData}>
        <ColumnGroup key="info" title="Bad Joke Info">
          <Column key="title" title="Title" dataIndex="title" />
          <Column key="body" title="Body" dataIndex="description" />
        </ColumnGroup>
          <ColumnGroup key="details" title="The Joke-Cracker's Details">
            <Column key="firstName" title="First Name" render={_ => userData.firstName} />
            <Column key="lastName" title="Last Name"  render={_ => userData.lastName} />
          </ColumnGroup>
          <Column title="Rating" key="value" render={item => Array(item.rating.value).fill(1).map(_ => <StarFilled />)} />
          <Column title="Actions" render={(_, record) => deleteButton(record)} key="actions" />
        </Table>
        <DeleteConfirmation
          onSubmit={onDelete}
          onCancel={() => setShowConfirmation(false)}
          isVisible={showConfirmation}
          title={`Delete ${selectedJoke && selectedJoke.title}`}
          prompt={`Are you sure want to delete ${selectedJoke && selectedJoke.title}? This action is irreversible.`}
        />
      </Content>
    </Layout>
    );
};

export default Jokes;
