import React, { useEffect, useState } from "react";

const ProductForm = ({ initialValues = {}, onSubmit }) => {
  // keep everything as string in inputs to avoid empty->number binding issues
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(""); // string
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(""); // string
  const [imageFile, setImageFile] = useState(null);

  // Pre-fill on open / when switching products
  useEffect(() => {
    setName(initialValues.name ?? "");
    setBrand(initialValues.brand ?? "");
    setPrice(
      initialValues.price !== undefined && initialValues.price !== null
        ? String(initialValues.price)
        : ""
    );
    setCategory(initialValues.category ?? "");
    setQuantity(
      initialValues.quantity !== undefined && initialValues.quantity !== null
        ? String(initialValues.quantity)
        : ""
    );
    setImageFile(null); // never prefill file inputs
  }, [initialValues]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build FormData using the *current* field values (already prefilled)
    const fd = new FormData();
    fd.append("name", name);
    fd.append("brand", brand);
    fd.append("price", price); // Spring converts to BigDecimal
    fd.append("category", category);
    fd.append("quantity", quantity); // Spring converts to int
    if (imageFile) fd.append("image", imageFile); // only send if user chose a file

    onSubmit(fd, initialValues.id || null);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {/* Current image preview (read-only) */}
      {initialValues.imageUrl ? (
        <div>
          <p className="text-sm text-gray-600">Current image</p>
          <img
            src={`http://localhost:8080${initialValues.imageUrl}`}
            alt="Current"
            className="w-24 h-24 object-cover rounded border"
          />
          <p className="text-xs text-gray-500 mt-1">
            Leave file empty to keep current image.
          </p>
        </div>
      ) : null}

      <input
        className="border p-2 rounded"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="border p-2 rounded"
        placeholder="Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        required
      />
      <input
        className="border p-2 rounded"
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        className="border p-2 rounded"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        className="border p-2 rounded"
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />

      <input
        className="border p-2 rounded"
        type="file"
        onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
      />

      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        {initialValues.id ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
};

export default ProductForm;
