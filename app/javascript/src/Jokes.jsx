import React, { useEffect, useState } from 'react';
import { Button, Layout, Table } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';

import DeleteConfirmation from './DeleteConfirmation';
import getBaseUrl from './utils';


const { Content } = Layout;
const { Column, ColumnGroup } = Table;

const baseUrl = getBaseUrl();

const Jokes = () => {
  const [jokeData, setJokeData] = useState(null);
  const [selectedJoke, setSelectedJoke] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const fetchData = async () => {
    const raw = await fetch(`${baseUrl}/jokes`);
    const data = await raw.json();
    setJokeData(data.reverse());
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
        <ColumnGroup title="Bad Joke Info">
          <Column title="Title" dataIndex="title" key="title" />
          <Column title="Optional Details" dataIndex="description" key="description" />
        </ColumnGroup>
          <ColumnGroup title="The Joke-Cracker's Details">
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
          </ColumnGroup>
          <Column title="Points Earned" dataIndex="value" key="value" sorter={sortByValue} />
          <Column title="Actions" render={(_, record) => deleteButton(record)} />
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
