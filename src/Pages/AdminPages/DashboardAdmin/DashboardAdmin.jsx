import React, { useEffect } from "react";
import useAdminDashboard from "../../../Hooks/useAdminDashboard";
import "./DashboardAdmin.css";
import { format } from "date-fns";

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
    getTripAnalysisById("62E1A19F-83DA-4803-92B3-A387BEF14BF0");
    getCustomPeriod({
      startDate: "2025-07-1T00:00:00",
      endDate: "2025-09-1T00:00:00",
    });
  }, []);

  return (
    <div className="dashboard-admin">
      <div className="dashboard-header">
        <h1>📊 Bảng Điều Khiển Quản Trị</h1>
      </div>

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

                // Các trường cần format tiền
                const moneyFields = [
                  "averageBookingValue",
                  "totalRevenueThisMonth",
                  "totalRevenuePreviousMonth",
                ];

                const formattedValue = moneyFields.includes(key)
                  ? new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(value || 0)
                  : value;

                return (
                  <div key={key} className="stat-card">
                    <span className="stat-label">
                      {vietnameseLabels[key] || key}
                    </span>
                    <span className="stat-value">{formattedValue}</span>
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
          <h2>4. Chuyến Đi Giảm Sút</h2>
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
                                <div className="historical-list">
                                  {item.historicalData.map((hist, hIdx) => (
                                    <div key={hIdx} className="historical-item">
                                      <div className="hist-date">
                                        📅 Ngày:{" "}
                                        {hist.month
                                          ? format(
                                              new Date(hist.month),
                                              "dd/MM/yyyy"
                                            )
                                          : "N/A"}
                                      </div>
                                      <div className="hist-booking">
                                        🧾 Đặt chỗ:{" "}
                                        <strong>{hist.bookingCount}</strong>
                                      </div>
                                      <div className="hist-revenue">
                                        💰 Doanh thu:{" "}
                                        <strong>
                                          {new Intl.NumberFormat("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                          }).format(hist.revenue)}
                                        </strong>
                                      </div>
                                    </div>
                                  ))}
                                </div>
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
                          {opt.potentialRevenueIncrease.toLocaleString("vi-VN")}{" "}
                          ₫
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

        <section className="card analysis-card">
          <h2>8. Phân Tích Chuyến Đi Nổi Bật</h2>
          {tripAnalysisById ? (
            <div className="trip-analysis">
              {/* Thông tin chuyến đi */}
              <div className="subsection">
                <h3> Thông tin chuyến đi</h3>
                <p>
                  <strong>Tên chuyến:</strong>{" "}
                  {tripAnalysisById.tripInfo?.tripName}
                </p>
                <p>
                  <strong>Điểm đến:</strong>{" "}
                  {tripAnalysisById.tripInfo?.destinations?.join(", ")}
                </p>
                <p>
                  <strong>Tổng chi phí ước tính:</strong>{" "}
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(tripAnalysisById.tripInfo?.totalEstimatedCost || 0)}
                </p>
              </div>

              {/* Tóm tắt */}
              <div className="subsection">
                <h3>📊 Tóm tắt</h3>
                <ul>
                  <li>
                    <strong>Tổng lượt đặt:</strong>{" "}
                    {tripAnalysisById.summary?.totalBookings}
                  </li>
                  <li>
                    <strong>Tổng doanh thu:</strong>{" "}
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(tripAnalysisById.summary?.totalRevenue || 0)}
                  </li>
                  <li>
                    <strong>Giá trị đặt trung bình:</strong>{" "}
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(
                      tripAnalysisById.summary?.averageBookingValue || 0
                    )}
                  </li>
                  <li>
                    <strong>Tỉ lệ hủy:</strong>{" "}
                    {tripAnalysisById.summary?.cancellationRate}%
                  </li>
                </ul>
              </div>

              {/* Xu hướng theo tháng */}
              <div className="subsection">
                <h3>📅 Xu hướng theo tháng</h3>
                {tripAnalysisById.monthlyTrend?.length ? (
                  <div className="table-wrapper">
                    <table>
                      <thead>
                        <tr>
                          <th>Ngày</th>
                          <th>Lượt đặt</th>
                          <th>Doanh thu</th>
                          <th>Giá trị trung bình</th>
                          <th>Tỉ lệ hủy</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tripAnalysisById.monthlyTrend.map((trend, idx) => (
                          <tr key={idx}>
                            <td>
                              {format(new Date(trend.month), "dd/MM/yyyy")}
                            </td>
                            <td>{trend.bookingCount}</td>
                            <td>
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(trend.revenue || 0)}
                            </td>
                            <td>
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(trend.averageBookingValue || 0)}
                            </td>
                            <td>{trend.cancellationRate}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p>Không có dữ liệu xu hướng.</p>
                )}
              </div>
            </div>
          ) : (
            <p className="no-data">
              Không tìm thấy dữ liệu đặt chỗ cho chuyến đi này trong 3 tháng
              qua.
            </p>
          )}
        </section>

        {/* 9. Custom Period */}
        <section className="card custom-card">
          <h2>9. Dữ liệu theo quý</h2>
          {customPeriod ? (
            <div>
              <h3>
                Khoảng Thời Gian:{" "}
                {customPeriod.period?.startDate
                  ? format(
                      new Date(customPeriod.period.startDate),
                      "dd/MM/yyyy"
                    )
                  : ""}{" "}
                đến{" "}
                {customPeriod.period?.endDate
                  ? format(new Date(customPeriod.period.endDate), "dd/MM/yyyy")
                  : ""}
              </h3>

              {/* Summary */}
              {customPeriod.summary && (
                <div className="stats-grid">
                  {Object.entries(customPeriod.summary).map(([key, value]) => {
                    const vietnameseLabels = {
                      totalBookings: "Tổng lượt đặt",
                      totalRevenue: "Tổng doanh thu",
                      averageBookingValue: "Giá trị đặt trung bình",
                      uniqueTrips: "Số chuyến đi duy nhất",
                    };

                    const formattedValue =
                      key === "totalRevenue" || key === "averageBookingValue"
                        ? new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(value || 0)
                        : value;

                    return (
                      <div key={key} className="stat-card">
                        <span className="stat-label">
                          {vietnameseLabels[key] || key}
                        </span>
                        <span className="stat-value">{formattedValue}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Daily Trend */}
              <h3>Xu Hướng Hàng Ngày</h3>
              {customPeriod.dailyTrend?.length ? (
                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>Ngày</th>
                        <th>Lượt đặt</th>
                        <th>Doanh thu</th>
                        <th>Số chuyến duy nhất</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customPeriod.dailyTrend.map((trend, idx) => (
                        <tr key={idx}>
                          <td>{format(new Date(trend.date), "dd/MM/yyyy")}</td>
                          <td>{trend.bookingCount}</td>
                          <td>
                            {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(trend.revenue || 0)}
                          </td>
                          <td>{trend.uniqueTrips}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="no-data">Không có dữ liệu xu hướng hàng ngày.</p>
              )}

              {/* Top Destinations */}
              <h3>Điểm Đến Hàng Đầu</h3>
              <div className="card">
                <ul className="trips-list">
                  {customPeriod.topDestinations &&
                  customPeriod.topDestinations.length > 0 ? (
                    customPeriod.topDestinations.map((item, index) => (
                      <li
                        key={index}
                        className="trip-item hot"
                        // {`trip-item ${
                        //   index === 0
                        //     ? "hot"
                        //     : index === customPeriod.topDestinations.length - 1
                        //     ? "declining"
                        //     : ""
                        // }`}
                      >
                        <strong>{item.province || "Không xác định"}</strong>
                        <div>📅 Đặt chỗ: {item.bookingCount}</div>
                        <div>
                          💰 Doanh thu: {item.revenue.toLocaleString("vi-VN")} ₫
                        </div>
                      </li>
                    ))
                  ) : (
                    <p className="no-data">Không có dữ liệu</p>
                  )}
                </ul>
              </div>
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
