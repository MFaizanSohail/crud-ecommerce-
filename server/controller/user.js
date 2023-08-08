const UserModel = require("../model/UserModel");

const createUser = (req, res) => {
	UserModel.create(req.body)
		.then((user) => res.json(user))
		.catch((err) => res.json(err));
};

const fetchuser = (req, res) => {
	UserModel.find({})
		.then((user) => res.json(user))
		.catch((err) => res.json(err));
};

const getUser = (req, res) => {
	const id = req.params.id;
	UserModel.findById({ _id: id })
		.then((user) => res.json(user))
		.catch((err) => res.json(err));
};

const userDelete = (req, res) => {
	const id = req.params.id;
	UserModel.findById(id).then((user) => {
		if (user.type === "admin") {
			return res
				.status(403)
				.json({ error: "Admin user cannot be deleted." });
		}
		UserModel.findByIdAndDelete({ _id: id })
			.then((user) => res.json(user))
			.catch((err) => res.json(err));
	});
};

const updateUser = (req, res) => {
	const id = req.params.id;
	UserModel.findById(id)
		.then((user) => {
			if (user.type === "admin") {
				return res
					.status(403)
					.json({ error: "Admin user cannot be updated." });
			}
			UserModel.findByIdAndUpdate(
				{ _id: id },
				{
					name: req.body.name,
					email: req.body.email,
					password: req.body.password,
					type: req.body.type,
				}
			)
				.then((user) => res.json(user))
				.catch((err) => res.json(err));
		})
		.catch((err) =>
			res.status(500).json({ error: "Internal Server Error" })
		);
};

module.exports = {
	createUser,
	fetchuser,
	getUser,
	updateUser,
	userDelete,
};
