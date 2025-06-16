import React, { useState } from "react";
import "./Header.css";
import logo from "../../../assets/images/logo-eco.png";
import LoginModal from "../../../Pages/LoginPages/LoginPage";
import useAuth from "../../../Hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FcManager } from "react-icons/fc";
import { CiLogout, CiSettings } from "react-icons/ci";
import { Divider } from "antd";
import { logout } from "../../../Features/auth/authSlice";
import { signOut } from "../../../Api/authApi";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { firstName, lastName, email } = useAuth();

  const handleLogout = async () => {
    await signOut();
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="header-container">
      <div className="header-inner container">
        <div className="logo-header">
          <img className="logo-img" src={logo} alt="logo" />
        </div>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#" tabIndex={0}>
            Home
          </a>
          <a href="#" tabIndex={0}>
            Tours
          </a>
          <a href="#" tabIndex={0}>
            Destination
          </a>
          <a href="#" tabIndex={0}>
            Deals
          </a>
          <a href="#" tabIndex={0}>
            Contact
          </a>
        </nav>

        {/* button login */}
        <div className="header-actions">
          <button
            className="btn-outline"
            type="button"
            aria-label="Change language"
          >
            Sign In
          </button>

          {isLoggedIn ? (
            <div
              className="user-profile-wrapper"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="user-profile">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG5B_Pc5VMtw8ze74lJ0QYcdSif6a3qMQ-kg&s"
                  alt="Profile"
                />
                <span>{firstName} {lastName}</span>
                <IoMdArrowDropdown />
              </div>

              {dropdownOpen && (
                <div className="user-dropdown">
                  <div className="user-dropdown__header">
                    <strong>{firstName} {lastName}</strong>
                    <p>{email}</p>
                  </div>
                  <ul className="user-dropdown__menu">
                    <li>
                      <Link to="/admin/dashboard-admin" className="profile-link">
                        <span>
                          <FcManager style={{ marginRight: 10 }} />
                        </span>{" "}
                        Doanh số
                      </Link>
                    </li>
                    <li>
                      <span>
                        <CiSettings />
                      </span>{" "}
                      Cài đặt
                    </li>
                   <Divider style={{margin: "0px"}}/>
                    <li onClick={handleLogout}>
                      <span>
                        <CiLogout />
                      </span>{" "}
                      Sign out
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                className="btn-primary"
                onClick={() => setShowModal(true)}
              >
                Sign up
              </button>
              <LoginModal
                show={showModal}
                onClose={() => setShowModal(false)}
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
