import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Signup from "./pages/user/signup/Signup";
import Login from "./pages/user/login/Login";
import AdminLogin from "./pages/admin/adminlogin/AdminLogin";
import { Provider } from "react-redux";
import { store } from "./app/Store";
import Homepage from "./pages/user/homepage/Homepage";
import AllProduct from "./pages/user/all_product/AllProduct";
import SingleProductPage from "./pages/user/single_productpage/SingleProductPage";

const App = () => {
  return (
    <div className="bg-white">
      <Provider store={store}>
        <Routes>
          {/* USER--ROUTES */}
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<AllProduct />} />
          <Route path="/product" element={<SingleProductPage />} />

          {/* ADMIN--ROUTES */}
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/admin_login" element={<AdminLogin />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
