/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
	const { id } = useParams();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState();
	const [type, settype] = useState(false);
	const navigate = useNavigate();

	const userData = {
		name,
		email,
		type: type ? "seller" : "",
	};

	useEffect(() => {
		axios
			.get("/users/getUser/" + id)
			.then((result) => {
				const userData = result.data;
				setName(userData.name);
				setEmail(userData.email);
				settype(userData.type === "seller");
			})
			.catch((err) => console.log(err));
	}, [id]);

	const submitUser = (e) => {
		e.preventDefault();

		const updatedUserData = {
			name,
			email,
			password,
			type: type ? "seller" : "buyer",
		};

		axios
			.put(
				"/users/updateUser/" + id,
				updatedUserData
			)
			.then((result) => {
				console.log(result);
				navigate("/");
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
				<div className="w-50 bg-white rounded p-3">
					<form onSubmit={submitUser}>
						<h2>Update User</h2>
						<div className="mb-2">
							<label htmlFor="">Name</label>
							<input
								type="text"
								placeholder="Enter Name"
								className="form-control"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="">Email</label>
							<input
								type="text"
								placeholder="Enter Email"
								className="form-control"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="">Password</label>
							<input
								type="password"
								placeholder="Enter Password"
								className="form-control"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="">Is Seller</label>
							<input
								type="checkbox"
								checked={type}
								onChange={(e) => settype(e.target.checked)}
							/>
						</div>
						<button type="submit" className="btn btn-success">
							Submit
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default UpdateUser;
