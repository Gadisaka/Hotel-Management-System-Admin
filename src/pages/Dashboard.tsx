import Sidebar from "@/components/sidebar";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen w-screen bg-white">
      <div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
