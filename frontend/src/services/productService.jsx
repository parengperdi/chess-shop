import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const getAllProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

export const deleteProduct = async (id) => {
  return axios.delete(`${BASE_URL}/products/${id}`);
};

// Toggle product active status
export const toggleProductStatus = async (id) => {
  const response = await axios.put(`${BASE_URL}/products/${id}/toggle`);
  return response.data;
};
