import React, { useState } from "react";
import "./SidebarAdmin.css";
import {
  MdOutlineDashboard,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosMedkit } from "react-icons/io";
import { LuListTodo } from "react-icons/lu";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { CiCalendar } from "react-icons/ci";
import { IoDocumentAttachOutline } from "react-icons/io5";

function SidebarAdmin() {
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);

  return (
    <div>
      <aside className="sidebar-admin">
        <div>
          <div className="top-admin">
            <div className="top-admin__icon">
              <RiAdminLine />
            </div>
            <span className="title-name">Admin Dashboard</span>
          </div>
          <nav className="nav-admin">
            <div className="nav-group">
              <Link to="/admin/dashboard-admin" className="nav-item active">
                <MdOutlineDashboard /> Doanh số
              </Link>

              {/* Quản lý người dùng */}
              <div
                className={`nav-item dropdown-service ${
                  accountDropdownOpen ? "open" : ""
                }`}
                onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
              >
                <div className="dropdown-left">
                  <LuListTodo />
                  <span>Quản lý tài khoản</span>
                </div>
                <IoIosArrowDown
                  className={`dropdown-icon ${
                    accountDropdownOpen ? "rotate" : ""
                  }`}
                />
              </div>

              {accountDropdownOpen && (
                <div className="submenu">
                  <Link to="/admin/manager-account" className="submenu-item">
                    Danh sách người dùng
                  </Link>
                  <Link
                    to="/admin/manager-staff-profile"
                    className="submenu-item"
                  >
                    Danh sách nhân viên
                  </Link>
                </div>
              )}

              {/*Quản lý thiết bị */}
              <div
                className={`nav-item dropdown-service ${
                  serviceDropdownOpen ? "open" : ""
                }`}
                onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
              >
                <div className="dropdown-left">
                  <MdOutlineMiscellaneousServices />
                  <span>Quản lý dịch vụ</span>
                </div>
                <IoIosArrowDown
                  className={`dropdown-icon ${
                    serviceDropdownOpen ? "rotate" : ""
                  }`}
                />
              </div>

              {serviceDropdownOpen && (
                <div className="submenu">
                  <Link to="/admin/service-admin" className="submenu-item">
                    Danh sách dịch vụ
                  </Link>
                  <Link
                    to="/admin/service-admin/device-b"
                    className="submenu-item"
                  >
                    Đặt lịch theo dịch vụ
                  </Link>
                </div>
              )}

              {/* Quản lý slot */}
              <Link to="/admin/slot-admin" className="nav-item">
                <CiCalendar /> Lịch làm việc
              </Link>

              {/* Quản lý phòng ban */}
              <Link to="/admin/dashboard-partner" className="nav-item">
                <HiOutlineOfficeBuilding /> Quản lý đối tác
              </Link>

              {/*  */}
              <Link to="/admin/kit-admin" className="nav-item">
                <IoIosMedkit /> Quản lý dụng cụ Y tế
              </Link>

              {/*Quản lý thiết bị */}
              <div
                className={`nav-item dropdown-service ${
                  blogDropdownOpen ? "open" : ""
                }`}
                onClick={() => setBlogDropdownOpen(!blogDropdownOpen)}
              >
                <div className="dropdown-left">
                  <IoDocumentAttachOutline />
                  <span>Quản lý blogger</span>
                </div>
                <IoIosArrowDown
                  className={`dropdown-icon ${
                    blogDropdownOpen ? "rotate" : ""
                  }`}
                />
              </div>

              {blogDropdownOpen && (
                <div className="submenu">
                  <Link to="#" className="submenu-item">
                    Danh sách blogger
                  </Link>
                  <Link to="#" className="submenu-item">
                    Các loại blogger
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
}

export default SidebarAdmin;
