import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdminDashboard from "../components/AdminDashboard";
import { useAppContext } from "../context/AppContext"; 
import { useNavigate } from "react-router-dom";

function AdminDashboardPage() {
	const { loginType } = useAppContext(); 
	const navigate = useNavigate();


	if (loginType === "admin") {
		return (
			<>
				<Navbar />
				<AdminDashboard />
				<Footer />
			</>
		);
	} else {
		navigate("/");
		return null; 
	}
}

export default AdminDashboardPage;
