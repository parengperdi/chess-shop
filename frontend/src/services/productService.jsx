import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

//createa new product
export const addProduct = async (formData) => {
  const response = await axios.post(`${BASE_URL}/products`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

//get all products
export const getAllProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

// Delete a product by ID
export const deleteProduct = async (id) => {
  return axios.delete(`${BASE_URL}/products/${id}`);
};

// Toggle product active status
export const toggleProductStatus = async (id) => {
  const response = await axios.put(`${BASE_URL}/products/${id}/toggle`);
  return response.data;
};
