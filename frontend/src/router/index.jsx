import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import AdminPage from "../pages/AdminPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminPage />} />
      {/* <Route path="/product/:id" element={<ProductDetail/>} />*/}
    </Routes>
  );
}

export default AppRoutes;
