import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Signup from "./pages/user/signup/Signup";
import Login from "./pages/user/login/Login";
import AdminLogin from "./pages/admin/adminlogin/AdminLogin";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* USER--ROUTES */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />


          {/* ADMIN--ROUTES */}
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/admin_login" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
