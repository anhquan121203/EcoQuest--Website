import React from "react";
import "./GuidePage.css";

function GuidePage() {
  return (
    <div className="guide-container">
      <h1 className="guide-title">Hướng dẫn tải ứng dụng ECOQUEST</h1>
      <p className="guide-note">
        <strong>Lưu ý:</strong> Đây là phiên bản thử nghiệm nên chúng tôi deploy
        trên ứng dụng <strong>Expo Go</strong>, một ứng dụng dành cho nhà phát
        triển chạy thử các ứng dụng của mình.
      </p>

      {/* Bước 1 */}
      <div className="guide-step">
        <h2>Bước 1: Tải Expo Go trên App Store hoặc CH Play</h2>

        {/* Thẻ giới thiệu Expo Go */}
        {/* Nút tải app */}
        <div className="store-icons">
          <a
            href="https://apps.apple.com/us/app/expo-go/id982107779"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="store-badge app-store"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=host.exp.exponent"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Google Play"
              className="store-badge google-play"
            />
          </a>
        </div>
      </div>

      {/* Bước 2 */}
      <div className="guide-step">
        <h2>Bước 2: Vào ứng dụng Expo Go và quét mã QR sau</h2>
        <img
          className="qr-code"
          src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=ECOQUEST"
          alt="QR Code"
        />
      </div>

      {/* Bước 3 */}
      <div className="guide-step">
        <h2>Bước 3: Trải nghiệm ứng dụng ECOQUEST của chúng tôi</h2>
        <p>
          Chúc các bạn thành công và có trải nghiệm tuyệt vời trên ứng dụng của
          chúng tôi. Xin chân thành cảm ơn.
        </p>
      </div>
    </div>
  );
}

export default GuidePage;
