import React, { useEffect, useState } from "react";
import usePartner from "../../../Hooks/usePartner";
import AddPartnerModal from "../PartnerAdmin/AddPartnerModal/AddPartnerModal";
import EditPartnerModal from "../PartnerAdmin/EditPartnerModal/EditPartnerModal";
import "./PartnerAdmin.css";

function PartnerAdmin() {
  const {
    partners,
    loading,
    error,
    fetchAllPartners,
    createNewPartner,
    modifyPartner,
  } = usePartner();

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);

  // Fetch all partners when component mounts
  useEffect(() => {
    fetchAllPartners();
  }, [fetchAllPartners]);

  // Handle adding a new partner
  const handleAddPartner = async (data) => {
    await createNewPartner(data);
    setShowAddModal(false);
    setSelectedPartner(null); // reset sau khi thêm
  };

  // Handle editing an existing partner
  const handleEditPartner = async (data) => {
    await modifyPartner(data);
    setShowEditModal(false);
    setSelectedPartner(null); // reset sau khi sửa
  };

  // Open the edit modal for a specific partner
  const openEditModal = (partner) => {
    setSelectedPartner(partner);
    setShowEditModal(true);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message || error.toString()}</div>;

  return (
    <div className="partner-admin">
      <h1>Quản lý đối tác</h1>
      <button onClick={() => setShowAddModal(true)}>Thêm Đối tác</button>
      <table className="partner-table">
        <thead>
          <tr>
            <th>Tên công ty</th>
            <th>Tên liên hệ</th>
            {/* <th>Điện thoại</th> */}
            <th>Mô tả</th>
            <th>Xác thực</th>
            <th>Ngày tạo</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {partners.map((partner) => (
            <tr key={partner?.partnerId}>
              <td>{partner?.companyName}</td>
              <td>{partner?.contactName}</td>
              {/* <td>{partner?.phone}</td> */}
              <td>{partner?.description}</td>
              <td>{partner?.verified ? "Đã xác thực" : "Chưa xác thực"}</td>
              <td>{partner?.createdAt}</td>
              <td>
                <button onClick={() => openEditModal(partner)}>Cập nhập</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddPartnerModal
        open={showAddModal}
        onClose={() => {
          setShowAddModal(false);
          setSelectedPartner(null); // reset khi đóng modal Add
        }}
        onAdd={handleAddPartner}
      />

      <EditPartnerModal
        open={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          setSelectedPartner(null); // reset khi đóng modal Edit
        }}
        onEdit={handleEditPartner}
        partner={selectedPartner}
      />
    </div>
  );
}

export default PartnerAdmin;
