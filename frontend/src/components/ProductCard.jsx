import React from "react";
import { deleteProduct, toggleProductStatus } from "../services/productService";
const ProductCard = ({
  product,
  mode,
  onAddToCart,
  onBuyNow,
  onEdit,
  onDelete,
  onToggleActive,
}) => {
  //for delete product
  const handleDelete = async () => {
    if (
      !window.confirm(
        `Delete ${product.name} with a product id: ${product.id}?`
      )
    )
      return;

    try {
      await deleteProduct(product.id);
      console.log("Deleted product", product.id);
      onDelete(product.id); // trigger refresh in parent
    } catch (err) {
      console.error(err);
      alert("Failed to delete product");
    }
  };

  //for toggle active status
  const handleToggle = async (id) => {
    try {
      await toggleProductStatus(id);
      if (onToggleActive) onToggleActive(id);
    } catch (err) {
      console.error(err);
      alert("Failed to toggle product status");
    }
  };

  // Fallback image if product.imageUrl is missing or broken
  const imageUrl = product.imageUrl
    ? `http://localhost:8080${product.imageUrl}`
    : null;

  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite loop
    e.target.src = ""; // or you can use a placeholder text/image URL
  };

  return (
    <div className="bg-slate-50 border border-gray-300 rounded-2xl shadow-sm p-4 w-80 flex flex-col hover:shadow-slate-400 hover:shadow-md   hover:bg-stone-100">
      {/* Product Image */}
      <div className="w-full h-44 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
        {product.imageUrl ? (
          <img
            src={`http://localhost:8080${product.imageUrl}`}
            alt={product.name}
            onError={handleImageError}
            className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
          />
        ) : (
          <span className="text-gray-400 text-sm">No Image</span>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-3 space-y-1">
        <h2 className="text-lg font-semibold text-gray-900 truncate">
          {product.name}
        </h2>
        <p className="text-sm text-gray-500">{product.brand}</p>
        <p className="text-lg font-bold text-gray-800">${product.price}</p>
      </div>

      {/* Stock & Meta */}
      <div className="mt-2 flex justify-between text-xs text-gray-500">
        <span>Stock: {product.quantity}</span>
        <span>{product.rating} ⭐</span>
        {/* <span>
          {product.rating > 4
            ? "⭐⭐⭐⭐⭐"
            : product.rating > 3
            ? "⭐⭐⭐⭐"
            : product.rating > 2
            ? "⭐⭐⭐"
            : product.rating > 1
            ? "⭐⭐"
            : product.rating === 0
            ? "☆"
            : "⭐"}
          {product.rating}
        </span> */}
        <span>Sold: {product.numberOfSales}</span>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-4 gap-2">
        {mode === "admin" ? (
          <>
            <button
              onClick={() => onEdit(product)}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 rounded-lg  hover:scale-105 transition-all duration-200"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 rounded-lg hover:scale-105 transition-all duration-200"
            >
              Delete
            </button>
            <button
              onClick={() => handleToggle(product.id)}
              className={`flex-1 text-white text-sm font-medium py-2 rounded-lg hover:scale-105 transition-all duration-200 ${
                product.active
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-700 hover:bg-gray-800"
              }`}
            >
              {product.active ? "Activated" : "Activate"}
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => onAddToCart(product)}
              className="flex-1 bg-gray-200 hover:bg-black hover:text-white text-gray-900 text-sm font-medium py-2 rounded-lg hover:scale-105 transition-all duration-300"
            >
              Add to Cart
            </button>
            <button
              onClick={() => onBuyNow(product)}
              className="flex-1 bg-black hover:bg-gray-200 hover:text-gray-900 text-white text-sm font-medium py-2 rounded-lg hover:scale-105 transition-all duration-300"
            >
              Buy Now
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
