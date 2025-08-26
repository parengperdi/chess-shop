import React from "react";


  const ProductCard = ({ product }) => {
     // Fallback image if product.imageUrl is missing or broken
    const imageUrl = product.imageUrl
    ? `http://localhost:8080${product.imageUrl}`
    : null;

  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite loop
    e.target.src = ""; // or you can use a placeholder text/image URL
  };

  return (
    <div className="bg-stone-500 p-4 rounded-xl ">
      <div className="bg-stone-500  rounded-xl w-auto">
        <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center" >
          {product.imageUrl ? (
            <img
              src={`http://localhost:8080${product.imageUrl}`} 
              alt={product.name}
              onError={handleImageError}
              className="w-full h-full object-cover" />
          ) : (
            <span className="text-gray-600">No Image</span>
          )}
        </div>
      </div>
      <div className="flex gap-4">
      <h2 className="text-lg font-semibold pl-1">{product.name}</h2>
      <p className="text-white pl-1">{product.brand}</p>
      </div>
      <div className="flex gap-4">
        <p className="text-rose-950 font-bold pl-1">${product.price}</p>
        <p className="text-sm text-lime-950 font-extrabold pl-1">In stock: {product.quantity}</p>
        <p className="text-sm  text-red-950 font-extrabold w-20 pl-1 rounded-lg mb-1">Rating: {product.rating}</p>
        <p className="text-sm text-zinc-800 font-extrabold w-20 pl-1 rounded-lg">Sold: {product.numberOfSales}</p>
      </div>

      <div className="flex justify-end mt-2 gap-2">
        <button className="bg-stone-300 rounded-md p-2 text-black hover:bg-stone-400">
          Add to Cart
        </button>
        <button className="bg-stone-900 rounded-md p-2 text-white hover:bg-stone-950">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
