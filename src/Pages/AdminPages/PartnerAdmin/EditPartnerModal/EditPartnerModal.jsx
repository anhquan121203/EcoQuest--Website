import React, { useEffect } from "react";
import { Modal, Form, Input, Button, Select } from "antd";

const PARTNER_TYPE_OPTIONS = [
  { label: "Loại 1", value: 1 },
  { label: "Loại 2", value: 2 },
  { label: "Loại 3", value: 3 },
  
];

const EditPartnerModal = ({ open, onClose, onEdit, partner }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (partner) {
      form.setFieldsValue({
        companyName: partner.companyName || "",
        contactName: partner.contactName || "",
        description: partner.description || "",
        partnerType: partner.partnerType || [],
      });
    }
  }, [partner, form]);

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const data = {
          partnerId: partner.partnerId,
          companyName: values.companyName,
          contactName: values.contactName,
          description: values.description,
          partnerType: values.partnerType,
        };
        console.log("DATA UPDATE:", data); // kiểm tra dữ liệu gửi lên
        onEdit(data);
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
      title="Chỉnh sửa đối tác"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Hủy
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Lưu
        </Button>,
      ]}
      destroyOnHidden
    >
      <Form
        form={form}
        layout="vertical"
        name="edit_partner_form"
        initialValues={{
          companyName: "",
          contactName: "",
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

export default EditPartnerModal;
