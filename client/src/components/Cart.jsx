function Cart({ cart, onCheckout }) {
  return (
    <>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        <table className="cart-items">
          <tbody>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            {cart.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>{`$${item.price}`}</td>
              </tr>
            ))}
            <tr>
              <td colspan="3" class="total">
                {`Total: $${cart.reduce((acc, curr) => {
                  return acc + curr.quantity * curr.price;
                }, 0)}`}
              </td>
            </tr>
          </tbody>
        </table>
        <a class="button checkout" onClick={onCheckout}>
          Checkouts
        </a>
      </div>
    </>
  );
}

export default Cart;

//   return e("div", { className: "app" }, [
//     e("header", null, [
//       e("h1", null, "The Shop!"),
//       e("div", { className: "cart" }, [
//         e("h2", null, "Your Cart"),
//         e("p", null, "Your cart is empty"),
//         e("p", null, "Total: $0"),
//         e("a", { className: "button checkout disabled" }, "Checkout"),
//       ]),
//     ]),
