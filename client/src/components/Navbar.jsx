import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./Navbar.css";

const Navbar = () => {
	const { isLoggedIn, loginType } = useAuth();

	return (
		<nav className="navbar">
			<div className="navbar-left">
				<Link to="/" className="navbar-logo">
					Logo
				</Link>
			</div>
			<div className="navbar-right">
				<Link to="/" className="navbar-link">
					Home
				</Link>
				{isLoggedIn && loginType === "admin" ? (
					<>
						<Link to="/AdminDashboard" className="navbar-link">
							Dashboard
						</Link>
						<Link to="/AddProductForm" className="navbar-link">
							Add Product
						</Link>
					</>
				) : (
					<>
						<Link to="/registration" className="navbar-link">
							Register
						</Link>
						<Link to="/login" className="navbar-link">
							Login
						</Link>
					</>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
