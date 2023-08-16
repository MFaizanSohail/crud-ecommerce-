/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppContext  } from "../../context/AppContext";
import "./AdminLogin.css"

function AdminLogin() {
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
					navigate("/AdminDashboard");
					setIsLoggedIn(true); 
					setLoginType(res.data.type); 	
				} else {
					navigate("/")
					setIsLoggedIn(false); 
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="d-flex vh-100 justify-content-center align-items-center">
			<div className="w-25 bg-white rounded p-4 UserLogin">
				<form onSubmit={LoginHandler}>
					<h2 className="mb-4 text-center">Admin Dashboard</h2>
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
					<button>
						Login
					</button>
				</form>
			</div>
		</div>
	);
}

export default AdminLogin;
