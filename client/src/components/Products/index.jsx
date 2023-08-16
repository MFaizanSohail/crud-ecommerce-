import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
import ProductItem from "../ProductItem";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="products-item">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
