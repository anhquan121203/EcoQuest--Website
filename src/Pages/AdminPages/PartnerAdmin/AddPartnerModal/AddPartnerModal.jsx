import React from "react";
import { Modal, Form, Input, Button, Select } from "antd";

const PARTNER_TYPE_OPTIONS = [
  { label: "Loại 1", value: 1 },
  { label: "Loại 2", value: 2 },
  { label: "Loại 3", value: 3 },
];

const AddPartnerModal = ({ open, onClose, onAdd }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        // Đảm bảo partnerType là mảng số
        const data = {
          ...values,
          partnerType: values.partnerType || [],
        };
        onAdd(data);
        form.resetFields();
        onClose();
      })
      .catch(() => {});
  };

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title="Thêm đối tác"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Hủy
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Thêm
        </Button>,
      ]}
      destroyOnHidden
    >
      <Form
        form={form}
        layout="vertical"
        name="add_partner_form"
        initialValues={{
          companyName: "",
          contactName: "",
          phoneNumber: "",
          description: "",
          partnerType: [],
        }}
      >
        <Form.Item
          label="Tên công ty"
          name="companyName"
          rules={[{ required: true, message: "Vui lòng nhập tên công ty!" }]}
        >
          <Input placeholder="Tên công ty" />
        </Form.Item>
        <Form.Item
          label="Người liên hệ"
          name="contactName"
          rules={[{ required: true, message: "Vui lòng nhập người liên hệ!" }]}
        >
          <Input placeholder="Người liên hệ" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email!" },
            { type: "email", message: "Email không hợp lệ!" },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item label="Số điện thoại" name="phoneNumber">
          <Input placeholder="Số điện thoại" />
        </Form.Item>
        <Form.Item label="Mô tả" name="description">
          <Input.TextArea placeholder="Mô tả" rows={3} />
        </Form.Item>
        <Form.Item
          label="Loại đối tác"
          name="partnerType"
          rules={[{ required: true, message: "Vui lòng chọn loại đối tác!" }]}
        >
          <Select
            mode="multiple"
            allowClear
            placeholder="Chọn loại đối tác"
            options={PARTNER_TYPE_OPTIONS}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddPartnerModal;
