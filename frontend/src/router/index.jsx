import { Routes, Route } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";
import Login from "../pages/Login";
import AdminPage from "../pages/AdminPage";
import Landing from "../pages/Landing";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/" element={<Landing />} />
      {/* <Route path="/product/:id" element={<ProductDetail/>} />*/}
    </Routes>
  );
}

export default AppRoutes;
