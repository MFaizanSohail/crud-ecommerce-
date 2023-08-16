import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AddProductPage from "./pages/AddProductPage";
import RegistrationPage from "./pages/RegistrationPage";
import UserLoginPage from "./pages/UserLoginPage";
import UserUpdatePage from "./pages/UserUpdatePage";
import CartPage from "./pages/CartPage";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/AdminDashboard"
						element={<AdminDashboardPage />}
					></Route>
					<Route path="/" element={<Home />}></Route>
					<Route
						path="/registration"
						element={<RegistrationPage />}
					></Route>
					<Route path="/login" element={<UserLoginPage />}></Route>
					<Route
						path="/update/:id"
						element={<UserUpdatePage />}
					></Route>
					<Route
						path="/AddProductForm"
						element={<AddProductPage />}
					></Route>
					<Route path="/Cart" element={<CartPage />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
