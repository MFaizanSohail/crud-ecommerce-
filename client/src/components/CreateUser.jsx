import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [type, settype] = useState(false);
	const navigate = useNavigate();

	const CreateNewUser = (e) => {
		e.preventDefault();

		const userData = {
			name,
			email,
			password,
			type: type ? "seller" : "buyer",
		};

		axios
			.post("/users/create", userData)
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
					<form onSubmit={CreateNewUser}>
						<h2>Add User</h2>
						<div className="mb-2">
							<label htmlFor="">Name</label>

							<input
								type="text"
								placeholder="Enter Name"
								className="form-control"
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="">Email</label>
							<input
								type="text"
								placeholder="Enter Email"
								className="form-control"
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
							<label className=" mx-2" htmlFor="type">
								Seller Account
							</label>
							<input
								type="checkbox"
								id="type"
								checked={type}
								onChange={(e) => settype(e.target.checked)}
							/>
						</div>
						<button className="btn btn-success">Submit</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default CreateUser;
