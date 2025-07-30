import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/product/:id" element={<ProductDetail/>} />*/}
    </Routes>
  );
}

export default AppRoutes;
