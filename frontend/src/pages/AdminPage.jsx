import React from "react";
import { useState, useEffect } from "react";
import AddProductForm from "../components/AddProductForm";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../services/productService";

const AdminPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Welcome to Admin Page</h1>
      <AddProductForm />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            mode="admin"
            onEdit={(product) => {
              console.log("Edited", product.id);
            }}
            onDelete={(product) => {
              console.log("Deleted", product.id);
            }}
            onToggleActive={(product) => {
              console.log("deactivated", product.id);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
