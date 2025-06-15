import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/UserComponent/Header/Header";
import Footer from "../Components/UserComponent/Footer/Footer";

function UserLayout() {
  return (
    <>
      <div className="header ">
        <Header />
      </div>

      <div className="outlet" style={{ marginTop: 100 }}>
        <Outlet />
      </div>

      <div style={{margin: 0}}>
        <Footer />
      </div>
    </>
  );
}

export default UserLayout;
