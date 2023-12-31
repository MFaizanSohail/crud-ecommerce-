/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import "./UserLogin.css";

function UserLogin() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { setIsLoggedIn, setLoginType } = useAppContext();
	const navigate = useNavigate();

	const LoginHandler = (e) => {
		e.preventDefault();

		const userData = {
			email,
			password,
		};
		axios.defaults.withCredentials = true;
		axios
			.post("/users/login", userData)
			.then((res) => {
				if (res.data.type === "admin") {
					navigate("/");
					setIsLoggedIn(false);
				} else if (res.data.type === "seller") {
					navigate("/");
					setIsLoggedIn(true);
					setLoginType(res.data.type);
				} else {
					navigate("/");
					setIsLoggedIn(true);
					setLoginType(res.data.type);
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="d-flex vh-100 justify-content-center align-items-center">
			<div className="w-25 bg-white rounded p-4 UserLogin">
				<form onSubmit={LoginHandler}>
					<h2 className="mb-4 text-center">User Login</h2>
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
						/>
					</div>
					<button>Login</button>
				</form>
				<p className="mt-3 mb-0 text-center">
					Don't have an account?{" "}
					<Link to="/registration">Register</Link>
				</p>
			</div>
		</div>
	);
}

export default UserLogin;
