import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Products() {
	const [products, setProducts] = useState([]);
	const { isLoggedIn } = useAuth();

	useEffect(() => {
		axios.get("/products").then((response) => {
			setProducts(response.data);
		});
	}, []);

	return (
		<div className="products-page">
			<h2>Products</h2>
			<div className="product-grid">
				{products.map((product) => (
					<div key={product._id} className="product-card">
						<img src={product.image} alt={product.title} />
						<h3>{product.title}</h3>
						<p>{product.description}</p>
						<p>Price: ${product.price}</p>
						{isLoggedIn ? (
								<Link
									to="/addToCart"
									className="add-to-cart-link"
								>
									Add to Cart
								</Link>
						) : (
								<Link to="/login" className="add-to-cart-link">
									Add to Cart
								</Link>
						)}

						
					</div>
				))}
			</div>
		</div>
	);
}

export default Products;
