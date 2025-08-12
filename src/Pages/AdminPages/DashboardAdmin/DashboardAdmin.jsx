import React, { useEffect } from "react";
import useAdminDashboard from "../../../hooks/useAdminDashboard";
import "./DashboardAdmin.css";

function DashboardAdmin() {
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
    getOverview,
    getRegionForecast,
    getHotTrips,
    getDecliningTrips,
    getTripPopularityAnalysis,
    getOptimizationSuggestions,
    getComplete,
    getTripAnalysisById,
    getCustomPeriod,
  } = useAdminDashboard();

  useEffect(() => {
    getOverview();
    getRegionForecast();
    getHotTrips();
    getDecliningTrips();
    getTripPopularityAnalysis();
    getOptimizationSuggestions();
    getComplete();
    getTripAnalysisById("3fa85f64-5717-4562-b3fc-2c963f66afa6");
    getCustomPeriod({
      startDate: "2025-08-12T00:00:00",
      endDate: "2025-08-15T00:00:00",
    });
  }, []);

  return (
    <div className="dashboard-admin">
      <header className="dashboard-header">
        <h1>📊 Bảng Điều Khiển Quản Trị</h1>
      </header>

      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p>Đang tải dữ liệu...</p>
        </div>
      )}
      {error && (
        <div className="error-alert">
          <span>⚠️ Lỗi: {JSON.stringify(error)}</span>
        </div>
      )}

      <div className="dashboard-grid">
        {/* 1. Overview */}
        <section className="card overview-card">
          <h2>1. Tổng Quan</h2>
          {overview && (
            <div className="stats-grid">
              {Object.entries(overview).map(([key, value]) => {
                const vietnameseLabels = {
                  totalBookingsThisMonth: "Tổng lượt đặt tháng này",
                  totalBookingsPreviousMonth: "Tổng lượt đặt tháng trước",
                  totalRevenueThisMonth: "Tổng doanh thu tháng này",
                  totalRevenuePreviousMonth: "Tổng doanh thu tháng trước",
                  bookingGrowthRate: "Tỷ lệ tăng trưởng lượt đặt",
                  revenueGrowthRate: "Tỷ lệ tăng trưởng doanh thu",
                  activeTrips: "Số chuyến đi đang hoạt động",
                  totalDestinations: "Tổng số điểm đến",
                  averageBookingValue: "Giá trị đặt trung bình",
                };

                return (
                  <div key={key} className="stat-card">
                    <span className="stat-label">
                      {vietnameseLabels[key] || key}
                    </span>
                    <span className="stat-value">{value}</span>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* 2. Region Forecast */}
        <section className="card forecast-card">
          <h2>2. Dự Báo Khu Vực</h2>
          {regionForecast?.length ? (
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Tỉnh</th>
                    <th>Huyện</th>
                    <th>Tháng Hiện Tại</th>
                    <th>Tháng Trước</th>
                    <th>Tăng Trưởng %</th>
                    <th>Dự Đoán Tháng Sau</th>
                  </tr>
                </thead>
                <tbody>
                  {regionForecast.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.province}</td>
                      <td>{item.district}</td>
                      <td>{item.currentMonthBookings}</td>
                      <td>{item.previousMonthBookings}</td>
                      <td
                        className={
                          item.growthRate >= 0 ? "positive" : "negative"
                        }
                      >
                        {item.growthRate}%
                      </td>
                      <td>{item.predictedNextMonthBookings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="no-data">Không có dữ liệu dự báo khu vực.</p>
          )}
        </section>

        {/* 3. Hot Trips */}
        <section className="card trips-card">
          <h2>3. Chuyến Đi Hot</h2>
          {hotTrips?.length ? (
            <ul className="trips-list">
              {hotTrips.map((trip, idx) => (
                <li key={idx} className="trip-item hot">
                  🔥 {trip.tripName}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-data">Không có chuyến đi hot lúc này.</p>
          )}
        </section>

        {/* 4. Declining Trips */}
        <section className="card trips-card">
          <h2>4. Chuyến Đi Giảm SúT</h2>
          {decliningTrips?.length ? (
            <ul className="trips-list">
              {decliningTrips.map((trip, idx) => (
                <li key={idx} className="trip-item declining">
                  📉 {trip.tripName}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-data">Không có chuyến đi giảm sút.</p>
          )}
        </section>

        {/* 5. Trip Popularity Analysis */}
        <section className="card analysis-card">
          <h2>5. Phân Tích Độ Phổ Biến Chuyến Đi</h2>
          {tripPopularityAnalysis ? (
            <div>
              <h3>Chuyến Đi Hot</h3>
              {tripPopularityAnalysis.hotTrips?.length ? (
                <ul className="trips-list">
                  {tripPopularityAnalysis.hotTrips.map((trip, idx) => (
                    <li key={idx} className="trip-item hot">
                      🔥 {trip.tripName || trip}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="no-data">Không có chuyến đi hot.</p>
              )}
              <h3>Chuyến Đi Giảm SúT</h3>
              {tripPopularityAnalysis.decliningTrips?.length ? (
                <ul className="trips-list">
                  {tripPopularityAnalysis.decliningTrips.map((trip, idx) => (
                    <li key={idx} className="trip-item declining">
                      📉 {trip.tripName || trip}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="no-data">Không có chuyến đi giảm sút.</p>
              )}
            </div>
          ) : (
            <p className="no-data">Không có dữ liệu phân tích độ phổ biến.</p>
          )}
        </section>

        {/* 6. Optimization Suggestions */}
        <section className="card suggestions-card">
          <h2>6. Gợi Ý Tối Ưu Hóa</h2>
          {optimizationSuggestions?.length ? (
            <div className="suggestions-scroll-container">
              <div className="suggestions-grid">
                {optimizationSuggestions.map((opt) => (
                  <div key={opt.tripId} className="suggestion-card">
                    <h3>{opt.tripName}</h3>
                    <p className="issue">
                      <strong>Vấn Đề:</strong> {opt.currentIssue}
                    </p>
                    <ul className="suggestions-list">
                      {opt.suggestions.map((s, i) => (
                        <li key={i}>
                          <strong>{s.type}:</strong> {s.title} —{" "}
                          <em>{s.description}</em>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="no-data">Không có gợi ý tối ưu hóa.</p>
          )}
        </section>

        {/* 7. Complete */}
        <section className="card complete-card">
          <h2>7. Dữ Liệu Tổng Hợp</h2>
          {complete ? (
            <div>
              {/* Region Forecasts với Historical Data */}
              {complete.regionForecasts?.length ? (
                <div className="subsection">
                  <h3>Dự Báo Khu Vực (Với Dữ Liệu Lịch Sử)</h3>
                  <div className="table-wrapper">
                    <table>
                      <thead>
                        <tr>
                          <th>Tỉnh</th>
                          <th>Huyện</th>
                          <th>Tháng Hiện Tại</th>
                          <th>Tháng Trước</th>
                          <th>Tăng Trưởng %</th>
                          <th>Dự Đoán Tháng Sau</th>
                          <th>Dữ Liệu Lịch Sử</th>
                        </tr>
                      </thead>
                      <tbody>
                        {complete.regionForecasts.map((item, idx) => (
                          <tr key={idx}>
                            <td>{item.province}</td>
                            <td>{item.district}</td>
                            <td>{item.currentMonthBookings}</td>
                            <td>{item.previousMonthBookings}</td>
                            <td
                              className={
                                item.growthRate >= 0 ? "positive" : "negative"
                              }
                            >
                              {item.growthRate}%
                            </td>
                            <td>{item.predictedNextMonthBookings}</td>
                            <td>
                              {item.historicalData?.length ? (
                                <ul className="historical-list">
                                  {item.historicalData.map((hist, hIdx) => (
                                    <li key={hIdx}>
                                      {hist.month}: Đặt chỗ -{" "}
                                      {hist.bookingCount}, Doanh thu -{" "}
                                      {hist.revenue}
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p>Không có dữ liệu lịch sử.</p>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <p className="no-data">Không có dự báo khu vực.</p>
              )}

              {/* Optimization Suggestions với chi tiết mở rộng */}
              {complete.optimizationSuggestions?.length ? (
                <div className="subsection">
                  <h3>Gợi Ý Tối Ưu Hóa (Với Chi Tiết Mở Rộng)</h3>
                  <div className="suggestions-grid">
                    {complete.optimizationSuggestions.map((opt) => (
                      <div key={opt.tripId} className="suggestion-card">
                        <h3>{opt.tripName}</h3>
                        <p className="issue">
                          <strong>Vấn Đề:</strong> {opt.currentIssue}
                        </p>
                        <ul className="suggestions-list">
                          {opt.suggestions.map((s, i) => (
                            <li key={i}>
                              <strong>{s.type}:</strong> {s.title} —{" "}
                              <em>{s.description}</em> (Tác Động Dự Kiến:{" "}
                              {s.expectedImpact}, Độ Khó: {s.difficulty})
                            </li>
                          ))}
                        </ul>
                        <p>
                          <strong>Tăng Doanh Thu Tiềm Năng:</strong>{" "}
                          {opt.potentialRevenueIncrease}
                        </p>
                        <p>
                          <strong>Ưu Tiên:</strong> {opt.priority}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="no-data">Không có gợi ý tối ưu hóa.</p>
              )}
            </div>
          ) : (
            <p className="no-data">Không có dữ liệu tổng hợp.</p>
          )}
        </section>

        {/* 8. Trip Analysis By ID */}
        <section className="card analysis-card">
          <h2>8. Phân Tích Chuyến Đi Theo ID</h2>
          {tripAnalysisById ? (
            <pre className="json-pretty">
              {JSON.stringify(tripAnalysisById, null, 2)}
            </pre>
          ) : (
            <p className="no-data">
              Không tìm thấy dữ liệu đặt chỗ cho chuyến đi này trong 3 tháng
              qua.
            </p>
          )}
        </section>

        {/* 9. Custom Period */}
        <section className="card custom-card">
          <h2>9. Khoảng Thời Gian Tùy Chỉnh</h2>
          {customPeriod ? (
            <div>
              <h3>
                Khoảng Thời Gian: {customPeriod.period?.startDate} đến{" "}
                {customPeriod.period?.endDate}
              </h3>
              {customPeriod.summary && (
                <div className="stats-grid">
                  {Object.entries(customPeriod.summary).map(([key, value]) => (
                    <div key={key} className="stat-card">
                      <span className="stat-label">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <span className="stat-value">{value}</span>
                    </div>
                  ))}
                </div>
              )}
              <h3>Xu Hướng Hàng Ngày</h3>
              {customPeriod.dailyTrend?.length ? (
                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>Ngày</th>
                        <th>Đặt Chỗ</th>
                        <th>Doanh Thu</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customPeriod.dailyTrend.map((trend, idx) => (
                        <tr key={idx}>
                          <td>{trend.date}</td>
                          <td>{trend.bookings}</td>
                          <td>{trend.revenue}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="no-data">Không có dữ liệu xu hướng hàng ngày.</p>
              )}
              <h3>Điểm Đến Hàng Đầu</h3>
              {customPeriod.topDestinations?.length ? (
                <ul className="trips-list">
                  {customPeriod.topDestinations.map((dest, idx) => (
                    <li key={idx}>
                      {dest.name || dest.destination} - Đặt chỗ: {dest.bookings}
                      , Doanh thu: {dest.revenue}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="no-data">Không có điểm đến hàng đầu.</p>
              )}
            </div>
          ) : (
            <p className="no-data">
              Không có dữ liệu khoảng thời gian tùy chỉnh.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}

export default DashboardAdmin;
