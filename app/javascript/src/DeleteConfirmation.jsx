import React from 'react';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const DeleteConfirmation = ({ onSubmit, onCancel, isVisible, title, prompt }) => (
  <Modal
    title={title}
    visible={isVisible}
    okText="Yes"
    onCancel={onCancel}
    onOk={() => {
      onSubmit();
      onCancel();
    }}
    okButtonProps={{ danger: true }}
    centered
    >
      <p>
        {prompt}
      </p>
    </Modal>
)


export default DeleteConfirmation;