import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Features/auth/authSlice";
import partnerSlice from "../Features/partner/partnerSlice";

export const store = configureStore({
  reducer: {
    // Add your reducers here
    auth: authSlice.reducer,
    partner: partnerSlice.reducer,
  },
});
