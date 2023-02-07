const PRODUCTS = "/api/products";

const removeEditProduct = (id) => {
  return PRODUCTS + "/" + id;
};

export { PRODUCTS, removeEditProduct };
