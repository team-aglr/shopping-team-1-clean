import data from "../mockData/data";
import EditableProduct from "./EditableProduct";

function ProductList({ products, onDelete, onEdit, onUpdateCart }) {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        let disabled = false;
        if (product.quantity <= 0) {
          disabled = true;
        }
        return (
          <EditableProduct
            {...product}
            key={product._id}
            onDelete={onDelete}
            onEdit={onEdit}
            disabled={disabled}
            onUpdateCart={onUpdateCart}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
