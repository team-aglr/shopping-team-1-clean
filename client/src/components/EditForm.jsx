import { useState } from "react";

function EditForm({ title, id, price, quantity, onVisible, onEdit }) {
  const [newName, setnewName] = useState(title);
  const [newQuantity, setnewQuantity] = useState(quantity);
  const [newPrice, setnewPrice] = useState(price);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(
      {
        _id: id,
        title: newName,
        price: newPrice,
        quantity: newQuantity,
      },
      () => onVisible(false)
    );
  };

  return (
    <div className="edit-form">
      <h3>Edit product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={newName}
            onChange={(e) => {
              setnewName(e.target.value);
            }}
          ></input>
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Product Price</label>
          <input
            type="text"
            id="product-price"
            value={newPrice}
            onChange={(e) => {
              setnewPrice(e.target.value);
              // TK when price changes, loop through the cart, find the ID, and replace the price
            }}
          ></input>
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="text"
            id="product-quantity"
            value={newQuantity}
            onChange={(e) => {
              setnewQuantity(e.target.value);
            }}
          ></input>
        </div>
        <div className="actions form-actions">
          <a className="button" onClick={handleSubmit}>
            Update
          </a>
          <a class="button" onClick={() => onVisible(false)}>
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
