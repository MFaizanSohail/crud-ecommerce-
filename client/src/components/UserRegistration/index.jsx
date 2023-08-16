import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./UserRegistration.css";

function UserRegistration() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [type, settype] = useState(false);
	const navigate = useNavigate();

	const RegisterNewUser = (e) => {
		e.preventDefault();

		// Validate the form fields
		if (!name || !email || !password) {
			alert("Please fill in all required fields.");
			return;
		}

		const userData = {
			name,
			email,
			password,
			type: type ? "seller" : "buyer",
		};

		axios
			.post("/users/create", userData)
			.then(() => {
				navigate("/login");
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="d-flex vh-100 justify-content-center align-items-center bg-primary">
			<div className="card p-4 shadow-sm w-25">
				<h2 className="mb-4 text-center">User Register</h2>
				<form onSubmit={RegisterNewUser}>
					<div className="mb-3">
						<label htmlFor="name" className="form-label">
							Name
						</label>
						<input
							type="text"
							id="name"
							className="form-control"
							placeholder="Enter Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							Email
						</label>
						<input
							type="email"
							id="email"
							className="form-control"
							placeholder="Enter Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="password" className="form-label">
							Password
						</label>
						<input
							type="password"
							id="password"
							className="form-control"
							placeholder="Enter Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<div className="mb-3 form-check">
						<input
							type="checkbox"
							id="type"
							className="form-check-input rounded-5"
							style={{ borderColor: "rgba(0, 0, 0, 0.3)" }} 
							checked={type}
							onChange={(e) => settype(e.target.checked)}
						/>
						<label className="form-check-label" htmlFor="type">
							Seller Account
						</label>
					</div>
					<button type="submit" className="btn btn-success w-100">
						Register User
					</button>
				</form>
				<p className="mt-3 mb-1 text-center">
					Already have an Account?{" "}
					<Link to="/login" className="btn btn-link p-0">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
}

export default UserRegistration;
