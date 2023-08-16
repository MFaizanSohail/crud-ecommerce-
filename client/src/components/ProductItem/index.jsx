/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import "./ProductItem.css";

function ProductItem({ product }) {
	const { isLoggedIn } = useAppContext();
	const { addToCart } = useAppContext();

	const handleAddToCart = () => {
		addToCart(product);
		console.log("Product added to cart:", product);
	};

	return (
		<div className="product-card">
			<img
				src={product.image}
				alt={product.title}
				style={{
					width: "200px",
					height: "200px",
					margin: "auto",
					display: "block",
				}}
			/>
			<h3 style={{ fontFamily: "fantasy" }}>
				{product?.title.length > 30
					? product.title.substr(0, 30)
					: product.title}
			</h3>
			<p>
				{product?.description.length > 60
					? product.description.substr(0, 60)
					: product.description}
			</p>
			<p style={{ textAlign: "end" }}>${product.price}</p>
			{isLoggedIn ? (
				<button className="add-to-cart-link" onClick={handleAddToCart}>
					Add to Cart
				</button>
			) : (
				<Link to="/login">
					<button className="add-to-cart-link">Add to Cart</button>
				</Link>
			)}
		</div>
	);
}

export default ProductItem;
