import React, { useState } from "react";
import "./Header.css";
import logo from "../../../assets/images/logo-eco.png";
import LoginModal from "../../../Pages/LoginPages/LoginPage";
import useAuth from "../../../Hooks/useAuth";
import { useSelector } from "react-redux";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const { firstName, lastName } = useAuth();

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

          <button className="btn-primary" onClick={() => setShowModal(true)}>
            Sign up
          </button>

          <LoginModal show={showModal} onClose={() => setShowModal(false)} />
          
        </div>
      </div>
    </header>
  );
}

export default Header;
