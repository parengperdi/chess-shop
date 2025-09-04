import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import ProductForm from "../components/ProductForm";
import { getAllProducts, addProduct } from "../services/productService";
import axios from "axios";

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  const handleSave = async (formData, id) => {
    try {
      if (id) {
        await axios.put(`http://localhost:8080/api/products/${id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Product updated!");
      } else {
        await addProduct(formData);
        alert("Product added!");
      }
      getAllProducts().then(setProducts);
      setModalOpen(false);
    } catch (err) {
      console.error(err);
      alert("Failed to save product");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Admin Page</h1>
      <div className="flex justify-center my-4">
        <button
          onClick={() => {
            setEditProduct(null);
            setModalOpen(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            mode="admin"
            onEdit={(prod) => {
              setEditProduct(prod);
              setModalOpen(true);
            }}
            onDelete={(id) => {
              setProducts((prev) => prev.filter((p) => p.id !== id));
            }}
            onToggleActive={(id) => {
              setProducts((prev) =>
                prev.map((p) => (p.id === id ? { ...p, active: !p.active } : p))
              );
            }}
          />
        ))}
      </div>

      <ProductModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <ProductForm initialValues={editProduct || {}} onSubmit={handleSave} />
      </ProductModal>
    </div>
  );
};

export default AdminPage;
