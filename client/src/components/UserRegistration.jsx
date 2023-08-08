import React, { useState } from "react";

function UserRegistration() {
	const [type, settype] = useState(false);

	return (
		<>
			<div className="d-flex vh-100 bg-primary justify-content-center align-items-center ">
				<div className="w-25 bg-white rounded p-3">
					<h2>Register</h2>
					<form>
						<div className="mb-3">
							<lable>
								<strong>Name</strong>
							</lable>
							<input
								type="text"
								placeholder="Enter Name"
								name="name"
								className="form-control rounded-0"
							/>
						</div>
						<div className="mb-3">
							<lable>
								<strong>Email</strong>
							</lable>
							<input
								type="email"
								placeholder="Enter Email"
								name="email"
								className="form-control rounded-0"
							/>
						</div>
						<div className="mb-3">
							<lable>
								<strong>Password</strong>
							</lable>
							<input
								type="password"
								placeholder="Enter Password"
								name="password"
								className="form-control rounded-0"
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
						<button className="btn btn-success w-100 rounded-0">Register</button>
                        <br></br>
                        <p className="text-center mt-4 mb-1">
                            Already got an Account.
                        </p>
                        <button className="btn btn-default border w-100 rounded-0 text-decoration-none">
                            Login
                        </button>
					</form>
				</div>
			</div>
		</>
	);
}

export default UserRegistration;
