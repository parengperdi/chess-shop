import React from "react";
import { useState, useEffect } from "react";
import { getActiveProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getActiveProducts().then(setProducts);
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">
        Welcome to Chess Shop
      </h1>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            mode="user"
            onAddToCart={(product) => {
              console.log("Add to cart", product.id);
            }}
            onBuyNow={(product) => {
              console.log("Buy now", product.id);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
