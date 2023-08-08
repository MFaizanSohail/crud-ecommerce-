/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3001/users/")
			.then((result) => setUsers(result.data)) 
			.catch((err) => console.log(err));
	}, []);

	const userDelete = (id) => {
		axios
			.delete("http://localhost:3001/users/userDelete/" + id)
			.then((res) => { 
				console.log(res) 
				window.location.reload()
			})
			.catch((err) => console.log(err));

	};

	return (
		<>
			<div className="d-flex vh-100 bg-primary justify-content-center align-items-center ">
				<div className="w-50 bg-white rounded p-3">
					<Link to="/create" className="btn btn-success">
						Add +
					</Link>
					<h1>Users Table</h1>
					<table className="table ">
						<thead className="text-center">
							<tr>
								<th>Name</th>
								<th>Email</th>
								<th>type</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody className="text-center">
							{users.map((user) => {
								return (
									<tr key={user._id}>
										<th> {user.name} </th>
										<th>{user.email} </th>
										<th>{user.type}</th>
										<th>
											<Link
												to={`/update/${user._id}`}
												className="btn btn-success"
											>
												Update
											</Link>{" "}
											<button
												className="btn btn-danger"
												onClick={(e) => {
													userDelete(user._id);
												}}
											>
												Delete
											</button>
										</th>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default User;