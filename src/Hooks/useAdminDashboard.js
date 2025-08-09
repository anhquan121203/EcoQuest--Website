// src/hooks/useAdminDashboard.js
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { toast } from "react-toastify";
import {
  fetchOverview,
  fetchRegionForecast,
  fetchHotTrips,
  fetchDecliningTrips,
  fetchTripPopularityAnalysis,
  fetchOptimizationSuggestions,
  fetchComplete,
  fetchTripAnalysisById,
  fetchCustomPeriod,
} from "../Features/adminDashboard/adminDashboardSlice";

const useAdminDashboard = () => {
  const dispatch = useDispatch();

  const {
    overview,
    regionForecast,
    hotTrips,
    decliningTrips,
    tripPopularityAnalysis,
    optimizationSuggestions,
    complete,
    tripAnalysisById,
    customPeriod,
    loading,
    error,
  } = useSelector((state) => state.adminDashboard);

  // Fetch API (GET) — dùng useCallback để tránh re-render thừa
  const getOverview = useCallback(() => {
    return dispatch(fetchOverview());
  }, [dispatch]);

  const getRegionForecast = useCallback(() => {
    return dispatch(fetchRegionForecast());
  }, [dispatch]);

  const getHotTrips = useCallback(() => {
    return dispatch(fetchHotTrips());
  }, [dispatch]);

  const getDecliningTrips = useCallback(() => {
    return dispatch(fetchDecliningTrips());
  }, [dispatch]);

  const getTripPopularityAnalysis = useCallback(() => {
    return dispatch(fetchTripPopularityAnalysis());
  }, [dispatch]);

  const getOptimizationSuggestions = useCallback(() => {
    return dispatch(fetchOptimizationSuggestions());
  }, [dispatch]);

  const getComplete = useCallback(() => {
    return dispatch(fetchComplete());
  }, [dispatch]);

  const getTripAnalysisById = useCallback(
    (tripId) => {
      return dispatch(fetchTripAnalysisById(tripId));
    },
    [dispatch]
  );

  const getCustomPeriod = async (params) => {
    try {
      await dispatch(fetchCustomPeriod(params)).unwrap();
      toast.success("Custom period data loaded successfully");
    } catch (err) {
      toast.error(err?.message || "Failed to load custom period data");
    }
  };

  return {
    // State
    overview,
    regionForecast,
    hotTrips,
    decliningTrips,
    tripPopularityAnalysis,
    optimizationSuggestions,
    complete,
    tripAnalysisById,
    customPeriod,
    loading,
    error,

    // Actions
    getOverview,
    getRegionForecast,
    getHotTrips,
    getDecliningTrips,
    getTripPopularityAnalysis,
    getOptimizationSuggestions,
    getComplete,
    getTripAnalysisById,
    getCustomPeriod,
  };
};

export default useAdminDashboard;
