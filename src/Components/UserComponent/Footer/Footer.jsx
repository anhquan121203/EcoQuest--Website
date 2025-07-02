import React from "react";
import "./Footer.css";
import logo from "../../../assets/images/logo-eco.png";

function Footer() {
  return (
    <footer role="contentinfo">
      <div className="footer-container">
        <div className="footer-section">
          <a href="#" className="footer-logo" aria-label="EcoQuest logo">
            <img src={logo} alt="logo" className="material-icons" />
          </a>
          <p>
            Không chỉ du lịch, hãy trải nghiệm du lịch theo phong cách riêng của
            bạn.
          </p>
          <address style={{ fontStyle: "normal", marginTop: 12 }}>
            123 Đường Du Lịch, Hà Nội, Việt Nam
            <br />
            +84 234 567 890
            <br />
            support@ecoquest.com
          </address>
        </div>
        <div className="footer-section">
          <h4>Điểm đến nổi bật</h4>
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
          <h4>Thông tin</h4>
          <div className="footer-links">
            <a href="#">Về chúng tôi</a>
            <a href="#">Tuyển dụng</a>
            <a href="#">Câu hỏi thường gặp</a>
            <a href="#">Liên hệ</a>
            <a href="#">Hỗ trợ</a>
            <a href="#">Blog</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Kết nối với chúng tôi</h4>
          <div className="footer-social" role="list">
            <a
              href="https://www.facebook.com/ecoquest.trip/"
              aria-label="Facebook"
              role="listitem"
              target="_blank"
              rel="noopener noreferrer"
            >
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
      <div className="footer-bottom">
        © 2024 EcoQuest. Đã đăng ký bản quyền.
      </div>
    </footer>
  );
}

export default Footer;
