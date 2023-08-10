import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import User from "../components/User";
import { useAuth } from "../components/AuthContext"; 
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
	const { loginType } = useAuth(); 
	const navigate = useNavigate();


	if (loginType === "admin") {
		return (
			<>
				<Navbar />
				<User />
				<Footer />
			</>
		);
	} else {
		navigate("/");
		return null; 
	}
}

export default AdminDashboard;
