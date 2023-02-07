function Header() {
  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <a className="button checkout disabled">Checkout</a>
      </div>
    </header>
  );
}

export default Header;

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
