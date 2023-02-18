import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";
import Navbar from "../../components/dashboard/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
      <Navbar />
    </div>
  );
};

export default DashboardLayout;
