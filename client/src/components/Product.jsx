import React from "react";

function Product({
  title,
  quantity,
  price,
  _id,
  onDelete,
  onVisible,
  disabled,
  onUpdateCart = { onUpdateCart },
}) {
  return (
    <div className="product-details">
      <h3>{title}</h3>
      <p className="price">{`$${price}`} </p>
      <p className={`quantity ${disabled ? "none-left" : ""}`}>
        {`${quantity} left in stock`}{" "}
      </p>
      <div className="actions product-actions">
        <a
          className={`button add-to-cart ${disabled ? "disabled" : ""}`}
          onClick={() => {
            if (!disabled) {
              onUpdateCart({ _id, title, price, quantity });
            }
          }}
        >
          Add to Cart
        </a>
        <a className="button edit" onClick={() => onVisible(true)}>
          Edit
        </a>
      </div>
      <a className="delete-button" onClick={() => onDelete(_id)}>
        <span>X</span>
      </a>
    </div>
  );
}

export default Product;
