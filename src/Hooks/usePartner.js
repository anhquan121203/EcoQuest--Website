import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {
  createPartner,
  selectAllPartners,
  selectPartnerById,
  updatePartner,
} from "../Features/partner/partnerSlice";
import { toast } from "react-toastify";

const usePartner = () => {
  const dispatch = useDispatch();
  const partners = useSelector((state) => state.partner.partners);
  const selectedPartner = useSelector((state) => state.partner.selectedPartner);
  const loading = useSelector((state) => state.partner.loading);
  const error = useSelector((state) => state.partner.error);

  const createNewPartner = async (partnerData) => {
    try {
      await dispatch(createPartner(partnerData)).unwrap();
      toast.success("Partner created successfully");
    } catch (err) {
      toast.error(err.message || "Failed to create partner");
    }
  };

  const fetchAllPartners = useCallback(() => {
    return dispatch(selectAllPartners());
  }, [dispatch]);

  const fetchPartnerById = (id) => {
    return dispatch(selectPartnerById(id));
  };

  const modifyPartner = async (partnerData) => {
    try {
      await dispatch(updatePartner(partnerData)).unwrap();
      toast.success("Partner updated successfully");
    } catch (err) {
      toast.error(err.message || "Failed to update partner");
    }
  };

  return {
    partners,
    selectedPartner,
    loading,
    error,
    createNewPartner,
    fetchAllPartners,
    fetchPartnerById,
    modifyPartner,
  };
};
export default usePartner;
