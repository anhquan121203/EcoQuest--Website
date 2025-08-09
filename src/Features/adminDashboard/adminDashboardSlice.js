// src/features/admin/adminManagementSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../Constants/apiConstant";

// Helper: get token
const getAuthHeaders = () => {
  const token = localStorage.getItem("accessToken");
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

// 1. Overview
export const fetchOverview = createAsyncThunk(
  "adminDashboard/fetchOverview",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/v1/admin/AdminDashboard/overview`,
        { headers: getAuthHeaders() }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// 2. Region Forecast
export const fetchRegionForecast = createAsyncThunk(
  "adminDashboard/fetchRegionForecast",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/v1/admin/AdminDashboard/region-forecast`,
        { headers: getAuthHeaders() }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// 3. Hot Trips
export const fetchHotTrips = createAsyncThunk(
  "adminDashboard/fetchHotTrips",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/v1/admin/AdminDashboard/hot-trips`,
        { headers: getAuthHeaders() }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// 4. Declining Trips
export const fetchDecliningTrips = createAsyncThunk(
  "adminDashboard/fetchDecliningTrips",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/v1/admin/AdminDashboard/declining-trips`,
        { headers: getAuthHeaders() }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// 5. Trip Popularity Analysis
export const fetchTripPopularityAnalysis = createAsyncThunk(
  "adminDashboard/fetchTripPopularityAnalysis",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/v1/admin/AdminDashboard/trip-popularity-analysis`,
        { headers: getAuthHeaders() }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// 6. Optimization Suggestions
export const fetchOptimizationSuggestions = createAsyncThunk(
  "adminDashboard/fetchOptimizationSuggestions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/v1/admin/AdminDashboard/optimization-suggestions`,
        { headers: getAuthHeaders() }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// 7. Complete
export const fetchComplete = createAsyncThunk(
  "adminDashboard/fetchComplete",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/v1/admin/AdminDashboard/complete`,
        { headers: getAuthHeaders() }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// 8. Trip Analysis by ID
export const fetchTripAnalysisById = createAsyncThunk(
  "adminDashboard/fetchTripAnalysisById",
  async (tripId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/v1/admin/AdminDashboard/trip-analysis/${tripId}`,
        { headers: getAuthHeaders() }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// 9. Custom Period
export const fetchCustomPeriod = createAsyncThunk(
  "adminDashboard/fetchCustomPeriod",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/v1/admin/AdminDashboard/custom-period`,
        { headers: getAuthHeaders(), params }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const adminDashboardSlice = createSlice({
  name: "adminDashboard",
  initialState: {
    overview: null,
    regionForecast: [],
    hotTrips: [],
    decliningTrips: [],
    tripPopularityAnalysis: [],
    optimizationSuggestions: [],
    complete: null,
    tripAnalysisById: null,
    customPeriod: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    const setPending = (state) => {
      state.loading = true;
      state.error = null;
    };
    const setRejected = (state, action) => {
      state.loading = false;
      state.error = action.payload;
    };

    builder
      .addCase(fetchOverview.pending, setPending)
      .addCase(fetchOverview.fulfilled, (state, action) => {
        state.loading = false;
        state.overview = action.payload;
      })
      .addCase(fetchOverview.rejected, setRejected)

      .addCase(fetchRegionForecast.pending, setPending)
      .addCase(fetchRegionForecast.fulfilled, (state, action) => {
        state.loading = false;
        state.regionForecast = action.payload;
      })
      .addCase(fetchRegionForecast.rejected, setRejected)

      .addCase(fetchHotTrips.pending, setPending)
      .addCase(fetchHotTrips.fulfilled, (state, action) => {
        state.loading = false;
        state.hotTrips = action.payload;
      })
      .addCase(fetchHotTrips.rejected, setRejected)

      .addCase(fetchDecliningTrips.pending, setPending)
      .addCase(fetchDecliningTrips.fulfilled, (state, action) => {
        state.loading = false;
        state.decliningTrips = action.payload;
      })
      .addCase(fetchDecliningTrips.rejected, setRejected)

      .addCase(fetchTripPopularityAnalysis.pending, setPending)
      .addCase(fetchTripPopularityAnalysis.fulfilled, (state, action) => {
        state.loading = false;
        state.tripPopularityAnalysis = action.payload;
      })
      .addCase(fetchTripPopularityAnalysis.rejected, setRejected)

      .addCase(fetchOptimizationSuggestions.pending, setPending)
      .addCase(fetchOptimizationSuggestions.fulfilled, (state, action) => {
        state.loading = false;
        state.optimizationSuggestions = action.payload;
      })
      .addCase(fetchOptimizationSuggestions.rejected, setRejected)

      .addCase(fetchComplete.pending, setPending)
      .addCase(fetchComplete.fulfilled, (state, action) => {
        state.loading = false;
        state.complete = action.payload;
      })
      .addCase(fetchComplete.rejected, setRejected)

      .addCase(fetchTripAnalysisById.pending, setPending)
      .addCase(fetchTripAnalysisById.fulfilled, (state, action) => {
        state.loading = false;
        state.tripAnalysisById = action.payload;
      })
      .addCase(fetchTripAnalysisById.rejected, setRejected)

      .addCase(fetchCustomPeriod.pending, setPending)
      .addCase(fetchCustomPeriod.fulfilled, (state, action) => {
        state.loading = false;
        state.customPeriod = action.payload;
      })
      .addCase(fetchCustomPeriod.rejected, setRejected);
  },
});

export default adminDashboardSlice;
