// filepath: /c:/Users/Caleb/Desktop/PROJECTS/ON DEVELOPMENT/Hotel Management System/admin/src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Top from "./components/Top";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Rooms from "./pages/Rooms";
import Customers from "./pages/Customers";
import Bookings from "./pages/Bookings";
import Report from "./pages/Report";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Top />
          <main className="p-8 bg-gray-50">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/report" element={<Report />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
