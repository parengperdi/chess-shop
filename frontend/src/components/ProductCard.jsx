import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-xl">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">{product.brand}</p>
      <p className="text-green-600 font-bold">${product.price}</p>
      <p className="text-sm text-gray-500">In stock: {product.quantity}</p>
    </div>
  );
};

export default ProductCard;
