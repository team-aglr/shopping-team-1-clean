import React from "react";
import Product from "./Product";
import EditForm from "./EditForm";
import { useState } from "react";

function EditableProduct({
  title,
  quantity,
  price,
  _id,
  onDelete,
  onEdit,
  disabled,
  onUpdateCart,
}) {
  const [editVisible, seteditVisible] = useState(false);
  return (
    <div className="product">
      <Product
        title={title}
        quantity={quantity}
        price={price}
        onDelete={onDelete}
        onVisible={seteditVisible}
        onUpdateCart={onUpdateCart}
        disabled={disabled}
        _id={_id}
      />
      {editVisible ? (
        <EditForm
          title={title}
          id={_id}
          price={price}
          quantity={quantity}
          onVisible={seteditVisible}
          onEdit={onEdit}
        />
      ) : null}
    </div>
  );
}

export default EditableProduct;
