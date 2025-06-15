import React from "react";
import  "./Footer.css"
import logo from "../../../assets/images/logo-eco.png"

function Footer() {
  return (
    <footer role="contentinfo">
      <div className="footer-container">
        <div className="footer-section">
          <a href="#" className="footer-logo" aria-label="Travel logo">
            <img src={logo} alt="logo" className="material-icons"/>
            
          </a>
          <p>Don't just travel, go travel in style.</p>
          <address style={{ fontStyle: "normal", marginTop: 12 }}>
            123 Travel Street, New York, NY
            <br />
            +1 234 567 890
            <br />
            support@travel.com
          </address>
        </div>
        <div className="footer-section">
          <h4>Top Destinations</h4>
          <div className="footer-links">
            <a href="#">Bali</a>
            <a href="#">Bangkok</a>
            <a href="#">Cancun</a>
            <a href="#">Nha Trang</a>
            <a href="#">Paris</a>
            <a href="#">New York</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Information</h4>
          <div className="footer-links">
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">FAQs</a>
            <a href="#">Contact</a>
            <a href="#">Support</a>
            <a href="#">Blog</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="footer-social" role="list">
            <a href="#" aria-label="Facebook" role="listitem">
              <span className="material-icons">facebook</span>
            </a>
            <a href="#" aria-label="Twitter" role="listitem">
              <span className="material-icons">twitter</span>
            </a>
            <a href="#" aria-label="Instagram" role="listitem">
              <span className="material-icons">instagram</span>
            </a>
            <a href="#" aria-label="YouTube" role="listitem">
              <span className="material-icons">youtube_searched_for</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2024 Travel. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
