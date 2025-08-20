import React, { useState } from "react";
import axios from "axios";

const AddProductForm = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rating, setRating] = useState("");
  const [numberOfSales, setNumberOfSales] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("name", name);
    fd.append("brand", brand);
    fd.append("price", price);
    fd.append("category", category);
    fd.append("quantity", quantity);
    fd.append("rating", rating);
    fd.append("numberOfSales", numberOfSales);
    if (imageFile) fd.append("image", imageFile);

    try {
      const res = await axios.post("http://localhost:8080/api/products", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product added successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Error adding product");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input type="text" placeholder="Brand" value={brand} onChange={e => setBrand(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
      <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} required />
      <input type="number" placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} required />
      <input type="number" placeholder="Rating" value={rating} onChange={e => setRating(e.target.value)} step="0.1" required />
      <input type="number" placeholder="Number of Sales" value={numberOfSales} onChange={e => setNumberOfSales(e.target.value)} required />
      <input type="file" onChange={e => setImageFile(e.target.files[0])} />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Add Product</button>
    </form>
  );
};

export default AddProductForm;