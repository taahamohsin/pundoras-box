import "./Form.css";

import React, { Fragment, useEffect, useState } from "react";
import { Form, Input, Modal, Rate } from "antd";
import getBaseUrl from "./utils";

const baseUrl = getBaseUrl();

export default ({ visible, onCancel, onSubmit, selectedUser }) => {
  const [ratings, setRatings] = useState([]);
  const [value, setValue] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    (async () => {
      const raw = await fetch(`${baseUrl}/rating-definitions`);
      const data = await raw.json();
      setRatings(data);
    })();
  }, []);

  return (
    <Modal
      title={`Tell us about ${selectedUser && selectedUser.firstName}'s latest gem`}
      open={visible}
      okText="Submit"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            onSubmit({ ...values, id: value && value.id });
            onCancel();
            form.resetFields();
          })
          .catch(info => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="rating-modal">
        <Form.Item
          name="rating"
          label="Rating"
          rules={[
            {
              required: true,
              message: "You have to select rating before you can submit."
            }
          ]}
        >
          <Rate
            count={ratings.length}
            tooltips={ratings.map(rating => (
              <Fragment>
                <h3>{rating.title}</h3>
                <p>{rating.description}</p>
              </Fragment>
            ))}
            value={value && value.value}
            onChange={value =>
              setValue(
                ratings && ratings.find(rating => rating.value === value)
              )}
            allowClear
          />
        </Form.Item>
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "You have to enter a title for the joke so we know what it was."
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Optional Details">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};
