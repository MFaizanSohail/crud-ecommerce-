/* eslint-disable react/prop-types */
import React from "react";

function Cart({ cartProducts }) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart-items">
        {cartProducts.map((item) => (
          <div key={item._id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p> {/* Display product quantity */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
