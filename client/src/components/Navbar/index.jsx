import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { ShoppingCartOutlined, LogoutOutlined } from "@mui/icons-material";
import "./Navbar.css";

const Navbar = () => {
	const { isLoggedIn, loginType, logout, cartItems } = useAppContext();
	console.log(loginType);
	const handleLogout = () => {
		logout();
	};

	return (
		<div className="navbar">
			<div className="navbar-left">
				<Link to="/" className="">
					<img
						src="/image/Amazon-Logo.png"
						alt="Header Logo"
						className="logo-image"
					/>
				</Link>
			</div>
			<div className="navbar-right">
				<Link to="/" className="navbar-link">
					Home
				</Link>
				{isLoggedIn ? (
					<>
						{loginType === "admin" && (
							<>
								<Link
									to="/AdminDashboard"
									className="navbar-link"
								>
									Admin Dashboard
								</Link>
								<Link
									to="/AddProductForm"
									className="navbar-link"
								>
									Add Product
								</Link>
							</>
						)}
						{loginType === "seller" && (
							<Link to="/AddProductForm" className="navbar-link">
								Add Product
							</Link>
						)}
						<Link to="/Cart" className="navbar-link">
							<div style={{ position: "relative" }}>
								<ShoppingCartOutlined
									style={{ color: "white" }}
								/>
								<span
									style={{
										position: "absolute",
										left: 14,
										right: 14,
										height: 15,
										width: 15,
										borderRadius: 7,
										color: "black",
										textAlign: "center",
										fontSize: 12,
										fontWeight: 400,
										backgroundColor: "white",
									}}
								>
									{cartItems.length}
								</span>
							</div>
						</Link>
						<Link
							to="/"
							className="navbar-link logout-button"
							onClick={handleLogout}
						>
							<LogoutOutlined />
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
		</div>
	);
};

export default Navbar;
