import React from "react";
import "./HomePage.css";
import {
  MdOutlineLocalDining,
  MdOutlineSecurity,
  MdTravelExplore,
} from "react-icons/md";
import { FaMap } from "react-icons/fa";

function HomePage() {
  return (
    <div>
      <main>
        <section
          className="hero"
          aria-label="Banner du lịch với thanh tìm kiếm"
        >
          <div
            className="hero-content"
            role="region"
            aria-describedby="hero-subtitle"
          >
            <h1 className="hero-title">
              Du lịch bền vững - Trải nghiệm không giới hạn!
            </h1>
            <p className="hero-subtitle" id="hero-subtitle">
              🔎 Tìm kiếm điều khiến bạn hạnh phúc mọi lúc, mọi nơi!
            </p>
            <form
              className="search-bar"
              role="search"
              aria-label="Biểu mẫu tìm kiếm du lịch"
            >
              <input
                type="text"
                name="destination"
                placeholder="Bạn muốn đi đâu?"
                aria-label="Tìm kiếm điểm đến"
                required
              />
              <select name="travel-type" aria-label="Chọn loại hình du lịch">
                <option value="hotels" selected>
                  Khách sạn
                </option>
                <option value="flights">Chuyến bay</option>
                <option value="car-rentals">Thuê xe</option>
                <option value="tours">Tour du lịch</option>
              </select>
              <button type="submit" aria-label="Tìm kiếm lựa chọn du lịch">
                Tìm kiếm
              </button>
            </form>
          </div>
        </section>

        {/* Features */}
        <section className="features" aria-label="Điểm nổi bật dịch vụ du lịch">
          <div className="feature-item" tabIndex={0}>
            <MdTravelExplore className="feature-icon" />
            <h3 className="feature-title">Khám phá mọi khả năng</h3>
            <p className="feature-desc">
              Tìm kiếm khách sạn, chuyến bay, thuê xe và nhiều hơn nữa
            </p>
          </div>

          <div className="feature-item" tabIndex={0}>
            <MdOutlineLocalDining className="feature-icon" />
            <h3 className="feature-title">Ưu đãi & đặc quyền hấp dẫn</h3>
            <p className="feature-desc">
              Ưu đãi độc quyền và tiết kiệm dành riêng cho bạn
            </p>
          </div>

          <div className="feature-item" tabIndex={0}>
            <FaMap className="feature-icon" />
            <h3 className="feature-title">Khám phá dễ dàng</h3>
            <p className="feature-desc">
              Gợi ý cá nhân hóa và lên kế hoạch chuyến đi thuận tiện
            </p>
          </div>

          <div className="feature-item" tabIndex={0}>
            <MdOutlineSecurity className="feature-icon" />
            <h3 className="feature-title">Du lịch an tâm</h3>
            <p className="feature-desc">Đặt chỗ an toàn, hỗ trợ tận tâm 24/7</p>
          </div>
        </section>

        {/* Top Destination For Your Next Vacation */}
        <h2 className="section-header">
          Điểm đến nổi bật cho kỳ nghỉ tiếp theo
        </h2>
        <section
          className="top-destinations"
          aria-label="Các điểm đến du lịch nổi bật"
        >
          <a
            href="#"
            className="destination-card"
            tabIndex={0}
            aria-label="Xem chi tiết điểm đến Chùa Một Cột"
          >
            <img
              src="https://media.gody.vn//images/ha-noi/chua-mot-cot/12-2016/20161201033328-chua-mot-cot-gody(11).jpg"
              alt="Ngôi đền tuyệt đẹp với núi ở Chùa Một Cột"
              className="destination-img"
            />
            <span className="destination-name">Chùa Một Cột</span>
          </a>
          <a
            href="#"
            className="destination-card"
            tabIndex={0}
            aria-label="Xem chi tiết điểm đến Chùa Bửu Long"
          >
            <img
              src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/09/chua-buu-long.jpg"
              alt="Ngôi đền nổi tiếng tại Bangkok"
              className="destination-img"
            />
            <span className="destination-name">Chùa Bửu Long</span>
          </a>
          <a
            href="#"
            className="destination-card"
            tabIndex={0}
            aria-label="Xem chi tiết điểm đến Đảo Khỉ"
          >
            <img
              src="https://bizweb.dktcdn.net/thumb/grande/100/410/190/products/tour-dao-khi-suoi-hoa-lan-12.jpg?v=1668660744563"
              alt="Bãi biển nhiệt đới và hàng dừa ở Cancun"
              className="destination-img"
            />
            <span className="destination-name">Đảo Khỉ</span>
          </a>
          <a
            href="#"
            className="destination-card"
            tabIndex={0}
            aria-label="Xem chi tiết điểm đến Biển Nha Trang"
          >
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cf762bd5-6564-464e-8c6c-217f8e09f440.png"
              alt="Thành phố và vịnh biển Nha Trang"
              className="destination-img"
            />
            <span className="destination-name">Biển Nha Trang</span>
          </a>
        </section>

        {/* Trip Ideas To Inspire You */}
        <h2 className="section-header">Gợi ý hành trình cho bạn</h2>
        <section className="trip-ideas" aria-label="Gợi ý hành trình du lịch">
          <article
            className="trip-idea-card trip-idea-1"
            tabIndex={0}
            aria-label="Hành trình Nam Bali với thiên nhiên tuyệt đẹp"
          >
            <h3 className="trip-idea-title">
              Bờ Biển Đẹp (Nha Trang, Mũi Né, Mỹ Khê, Hồ Cốc)
            </h3>
            <p className="trip-idea-subtitle">
              Thiên đường nắng vàng với những bãi biển tuyệt đẹp và văn hóa sôi
              động.
            </p>
            <button className="trip-idea-btn">Xem tất cả hoạt động</button>
          </article>
          <article
            className="trip-idea-card trip-idea-2"
            tabIndex={0}
            aria-label="Hành trình ngoài thành phố với cảnh đêm"
          >
            <h3 className="trip-idea-title">Ngoài thành phố</h3>
            <p className="trip-idea-subtitle">
              Tránh xa đám đông, hòa mình vào thiên nhiên, lịch sử và sự yên
              bình.
            </p>
            <button className="trip-idea-btn">Xem tất cả hoạt động</button>
          </article>
        </section>

        {/* Popular Activities */}
        <h2 className="section-header">Hoạt động nổi bật</h2>
        <section
          className="popular-activities"
          aria-label="Các hoạt động du lịch phổ biến"
        >
          <div className="activities-grid">
            <article
              className="activity-card"
              tabIndex={0}
              aria-label="Lặn ngắm san hô tại bãi biển Bali"
            >
              <img
                className="activity-img"
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/11e58e7a-56d4-49d4-bdba-c7c876da4543.png"
                alt="Cảnh lặn biển với rạn san hô"
              />
              <div className="activity-content">
                <h3 className="activity-title">Lặn ngắm san hô</h3>
                <p className="activity-desc">
                  Khám phá thiên đường dưới nước dọc bờ biển Bali tuyệt đẹp.
                </p>
                <div className="activity-tags">
                  <span className="tag">Ngoài trời</span>
                  <span className="tag">Biển</span>
                </div>
                <div>
                  <span className="price">1.900.000₫</span>
                  <span className="old-price">2.400.000₫</span>
                </div>
              </div>
            </article>
            <article
              className="activity-card"
              tabIndex={0}
              aria-label="Tour tham quan đền ở Bangkok"
            >
              <img
                className="activity-img"
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6be8222f-2bf2-446e-a123-803c0eb8e5ff.png"
                alt="Nhóm người đi bộ trong ngôi đền lịch sử ở Bangkok"
              />
              <div className="activity-content">
                <h3 className="activity-title">Tour tham quan đền</h3>
                <p className="activity-desc">
                  Khám phá những điểm đến bí ẩn giữa lòng di sản văn hóa
                  Bangkok.
                </p>
                <div className="activity-tags">
                  <span className="tag">Đi bộ</span>
                  <span className="tag">Lịch sử</span>
                </div>
                <div>
                  <span className="price">1.350.000₫</span>
                </div>
              </div>
            </article>
            <article
              className="activity-card"
              tabIndex={0}
              aria-label="Chuyến đi thuyền ở Cancun"
            >
              <img
                className="activity-img"
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7a70ebf3-a241-48c8-868f-557baece5a04.png"
                alt="Thuyền nhỏ trên bãi biển nắng ở Cancun"
              />
              <div className="activity-content">
                <h3 className="activity-title">Chuyến đi thuyền</h3>
                <p className="activity-desc">
                  Thư giãn trên chuyến du ngoạn dọc bờ biển tuyệt đẹp của
                  Cancun.
                </p>
                <div className="activity-tags">
                  <span className="tag">Thuyền</span>
                  <span className="tag">Thư giãn</span>
                </div>
                <div>
                  <span className="price">1.100.000₫</span>
                  <span className="old-price">1.400.000₫</span>
                </div>
              </div>
            </article>
            <article
              className="activity-card"
              tabIndex={0}
              aria-label="Tour ẩm thực tại Nha Trang"
            >
              <img
                className="activity-img"
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b5a1e90d-1682-4456-8ca8-42de6ab2ce2c.png"
                alt="Chợ ẩm thực đường phố và các món ăn ở Nha Trang"
              />
              <div className="activity-content">
                <h3 className="activity-title">Tour ẩm thực</h3>
                <p className="activity-desc">
                  Thưởng thức và khám phá ẩm thực địa phương cùng chợ đêm sôi
                  động.
                </p>
                <div className="activity-tags">
                  <span className="tag">Ẩm thực</span>
                  <span className="tag">Văn hóa</span>
                </div>
                <div>
                  <span className="price">850.000₫</span>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
