// Settup axiosIntance

import { API_BASE_URL } from "../Constants/apiConstant";
import axiosInstance from "./axiosInstance";

export const loginUser = async (email, password) => {
  try {
    const data = new URLSearchParams();
    data.append("grant_type", "password");
    data.append("username", email);
    data.append("password", password);
    data.append("Email", email);

    const response = await axiosInstance.post(
      `${API_BASE_URL}/connect/token`,
      data.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw (
      error.response?.data?.Errors ||
      error.response?.data?.Message ||
      "An error occurred"
    );
  }
};

export const signOut = async () => {
  try {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/";
  } catch (error) {
    console.error("Error logging out:", error);
  }
};