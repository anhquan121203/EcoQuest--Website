import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../Constants/apiConstant";

//create partner
export const createPartner = createAsyncThunk(
  "partner/createPartner",
  async (partnerData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.post(
        `${API_BASE_URL}/api/v1/admin/Ecq310InsertPartner`,
        partnerData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//select all partners
export const selectAllPartners = createAsyncThunk(
  "partner/selectAllPartners",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get(
        `${API_BASE_URL}/api/v1/admin/Ecq310SelectPartners`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//select partner by id
export const selectPartnerById = createAsyncThunk(
  "partner/selectPartnerById",
  async (partnerId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get(
        `${API_BASE_URL}/api/v1/admin/Ecq310SelectPartner`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          params: {
            PartnerId: partnerId,
          },
        }
      );
      return response.data.response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//update partner
export const updatePartner = createAsyncThunk(
  "partner/updatePartner",
  async (partnerData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.put(
        `${API_BASE_URL}/api/v1/admin/Ecq310UpdatePartner`,
        partnerData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//Slice for partner management
const partnerSlice = createSlice({
  name: "partner",
  initialState: {
    partners: [],
    selectedPartner: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(createPartner.fulfilled, (state, action) => {
        state.loading = false;
        state.partners.push(action.payload);
      })

      .addCase(selectAllPartners.pending, (state) => {
        state.loading = true;
      })
      .addCase(selectAllPartners.fulfilled, (state, action) => {
        state.loading = false;
        state.partners = action.payload;
      })
      .addCase(selectAllPartners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(selectPartnerById.pending, (state) => {
        state.loading = true;
      })
      .addCase(selectPartnerById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedPartner = action.payload;
      })
      .addCase(selectPartnerById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updatePartner.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePartner.fulfilled, (state, action) => {
        state.loading = false;

        if (!action.payload || !action.payload.partnerId) {
          return; // Không có dữ liệu hợp lệ thì không update state
        }

        const index = state.partners.findIndex(
          (partner) => partner.partnerId === action.payload.partnerId
        );

        if (index !== -1) {
          state.partners[index] = action.payload;
        }
      })

      .addCase(updatePartner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default partnerSlice;
