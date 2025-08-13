import React, { useState } from "react";
import "./LoginPage.css";
import logo from "../../assets/images/logo-eco.png";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { login } from "../../Features/auth/authSlice";
import { loginUser } from "../../Api/authApi";
import { toast } from "react-toastify";

const LoginModal = ({ show, onClose }) => {
  if (!show) return null;

  const navigate = useNavigate();
  const [showPassword] = useState(false);
  const dispatch = useDispatch();

  // Schema Yup cho form validation
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Bắt buộc nhập email!"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Bắt buộc nhập mật khẩu!"),
  });

  // Sử dụng Formik để quản lý form
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await loginUser(values.email, values.password);

        // Make sure we receive the correct tokens
        const access_token = response.access_token;
        const refresh_token = response.refresh_token;

        if (access_token) {
          // Save token in localStorage
          localStorage.setItem("accessToken", access_token);
          localStorage.setItem("refreshToken", refresh_token);

          // Dispatch login action
          dispatch(login({ access_token, refresh_token }));

          toast.success("Đăng nhập thành công ✅");

          onClose();
          navigate("/");
        } else {
          toast.error("Login failed. Please try again.");
        }
      } catch (error) {
        toast.error("Email or password is incorrect");
      }
    },
  });

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <div className="modal-header">
          <img src={logo} alt="Koala Logo" className="logo-login" />
          {/* <h2>Login Now</h2> */}
        </div>

        {/* <button className="google-btn">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
            alt="Google"
            className="google-icon"
          />
          Sign in with Google
        </button> */}

        <Divider>Đăng nhập tài khoản</Divider>
        <form className="form-login" onSubmit={formik.handleSubmit}>
          <input
            type="email"
            name="email"
            className="input"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your email..."
            required
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error-message">{formik.errors.email}</div>
          ) : null}

          <input
            type="password"
            name="password"
            className="input"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="**********"
            required
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error-message">{formik.errors.password}</div>
          ) : null}

          <div className="forgot">Quên tài khoản?</div>

          <button
            type="submit"
            className="login-button"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Đăng nhập..." : "Đăng nhập"}{" "}
          </button>
        </form>

        <div className="footer-text">
          Chưa có tài khoản? <span className="register">Đăng ký ngay</span>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
