import './Form.css';

import React from 'react';
import { Form, Input, Modal } from 'antd';

export default ({ visible, onCancel, onSubmit, onEdit, initialValues }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      title="Add a new user to the competition"
      visible={visible}
      okText="Submit"
      onCancel={onCancel}
      onOk={() => {
        form
        .validateFields()
        .then(values => {
          onSubmit(values);
          onCancel();
          form.resetFields();
        })
        .catch(info => {
          console.log('Validate Failed:', info);
        });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="user-modal"
        initialValues={initialValues}
      >
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[
            {
              required: true,
              message: 'The user must have a first name',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[
            {
              required: true,
              message: 'The user must have a last name',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};