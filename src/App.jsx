import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";


// CUSTORMER PAGE
import UserLayout from "./Layouts/UserLayout";
import HomePage from "./Pages/UserPages/HomePage/HomePage";

// ADMIN PAGE
import AdminLayout from "./Layouts/AdminLayout";
import DashboardAdmin from "./Pages/AdminPages/DashboardAdmin/DashboardAdmin";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
        
        </Route>


        {/* ADMIN ROUTES*********************************** */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardAdmin />} />
          <Route path="dashboard-admin" element={<DashboardAdmin />} />
        </Route>

      </Routes>

      {/* Setup toast */}
      <ToastContainer
        transition={Slide}
        autoClose={1000}
        newestOnTop={true}
        pauseOnHover={true}
        pauseOnFocusLoss={false}
        limit={5}
      />
    </BrowserRouter>
  );
}
export default App;
