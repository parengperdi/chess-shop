import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const getAllProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};
