/* eslint-disable react/prop-types */
import React from "react";
import "./cart.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppContext } from "../../context/AppContext"; // Import the AppContext

function Cart({ cartProducts }) {
	const { removeFromCart } = useAppContext();

	const calculateTotal = () => {
		return cartProducts.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
	};
	const handleDelete = (productId) => {
		removeFromCart(productId);
	};

	return (
		<div className="cart">
			<h2>Cart</h2>
			<div className="cart-items">
				{cartProducts.map((item) => (
					<div key={item._id} className="cart-item">
						<img src={item.image} alt={item.title} />
						<h3>{item.title}</h3>
						<p>Price: ${item.price}</p>
						<p>Quantity: {item.quantity}</p>
						<DeleteIcon
							style={{ color: "black", cursor: "pointer" }}
							onClick={() => handleDelete(item._id)}
						/>
					</div>
				))}
			</div>
			<div className="OrderSection"
				style={{
					display: "flex",
					flexDirection: "column",
					width: "90%",
					margin: "auto",
				}}
			>
				<p>Total: ${calculateTotal()}</p>
				<button className="order">
					<ShoppingBagIcon />
					Order
				</button>
			</div>
		</div>
	);
}

export default Cart;
