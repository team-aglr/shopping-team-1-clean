import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const e = React.createElement;

let products = [
  {
    title: "Amazon E-reader",
    price: 79.99,
    quantity: 5,
    disabled: false,
  },
  {
    title: "Apple 10.5-Inch iPad Pro",
    price: 649.99,
    quantity: 2,
    disabled: false,
  },
  {
    title: "Yamaha Portable Keyboard",
    price: 159.99,
    quantity: 0,
    disabled: true,
  },
];

let inputs = [
  {
    label: "name",
    value: "Product Name",
  },
  {
    label: "price",
    value: "Price",
  },
  {
    label: "quantity",
    value: "Quantity",
  },
];

const input = ({ label, value }) => {
  return e("div", { className: "input-group" }, [
    e("label", { for: `product-${label}` }, value),
    e("input", { type: "text", id: `product-${label}` }, ""),
  ]);
};

const product = ({ title, price, quantity, disabled }) => {
  return e("div", { className: "product" }, [
    e("div", { className: "product-details" }, [
      e("h3", null, title),
      e("p", { className: "price" }, `$${price}`),
      e("p", { className: "quantity" }, `${quantity} left in stock`),
      e("div", { className: "actions product-actions" }, [
        e(
          "a",
          { className: `button add-to-cart ${disabled ? "disabled" : ""}` },
          "Add to Cart"
        ),
        e("a", { className: "button edit" }, "Edit"),
      ]),
      e("a", { className: "delete-button" }, e("span", null, "X")),
    ]),
  ]);
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
