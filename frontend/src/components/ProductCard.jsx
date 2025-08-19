import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-green-600 p-4 rounded-xl ">
      <div>
        <img className="w-72" src="C:\Users\ferdi\Desktop\chessShop\backend\uploads\default.png" alt={product.name} />
      </div>
      
      <h2 className="text-lg font-semibold pl-1">{product.name}</h2>
      <p className="text-white pl-1">{product.brand}</p>
      <p className="text-white font-bold pl-1">${product.price}</p>
      <p className="text-sm text-white pl-1">In stock: {product.quantity}</p>
      <p className="text-sm bg-red-400 text-white w-20 pl-1 rounded-lg mb-1">Rating: {product.rating}</p>
      <p className="text-sm bg-yellow-400 text-white w-16 pl-1 rounded-lg">Sold: {product.numberOfSales}</p>
      <div className="flex justify-end mt-2 gap-2">
        <button className="bg-yellow-800 rounded-md p-2 text-white">
          Add to Cart
        </button>
        <button className="bg-green-800 rounded-md p-2 text-white">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
