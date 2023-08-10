/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import "./AddProductForm.css";

function AddProductForm() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [imageFile, setImageFile] = useState(null);
	const [price, setPrice] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleImageUpload = (e) => {
		setImageFile(e.target.files[0]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const formData = new FormData();
			formData.append("title", title);
			formData.append("description", description);
			formData.append("price", price);
			formData.append("image", imageFile);

			const response = await axios.post("/products/create", formData);

			setSuccessMessage("Product added successfully");
			setErrorMessage("");
		} catch (error) {
			setErrorMessage("Error adding product");
			setSuccessMessage("");
		}
	};

	return (
		<>
			<div className="product-form">
				<h2>Add Product</h2>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label>Title</label>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label>Description</label>
						<textarea
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							required
						></textarea>
					</div>
					<div className="form-group">
						<label>Image</label>
						<input
							type="file"
							accept="image/*"
							onChange={handleImageUpload}
							required
						/>
					</div>
					<div className="form-group">
						<label>Price</label>
						<input
							type="number"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							required
						/>
					</div>
					<button type="submit" className="btn btn-success">
						Add Product
					</button>
					{successMessage && (
						<p className="success-message">{successMessage}</p>
					)}
					{errorMessage && (
						<p className="error-message">{errorMessage}</p>
					)}
				</form>
			</div>
		</>
	);
}

export default AddProductForm;
