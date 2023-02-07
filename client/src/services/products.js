import axios from "axios";
import { PRODUCTS, removeEditProduct } from "../constants/routes";

// Get all products
const getProducts = async () => {
  const response = await axios.get(PRODUCTS);
  return response.data;
};

// Add one product
const addProduct = async (product) => {
  const response = await axios.post(PRODUCTS, { ...product });
  return response;
};

// Delete a product
const deleteProduct = async (id) => {
  await axios.delete(removeEditProduct(id));
  return id;
};

const editProduct = async (product) => {
  const response = await axios.put(removeEditProduct(product._id), {
    ...product,
  });
  return response;
};

export { getProducts, addProduct, deleteProduct, editProduct };
