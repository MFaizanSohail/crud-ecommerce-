const ProductModel = require("../model/ProductModel");
// const cloudinary = require("cloudinary").v2;
// const multer = require("multer");
// const bodyParser = require("body-parser");
// const fs = require("fs");

// if (!fs.existsSync("./uploads")) {
// 	fs.mkdirSync("./uploads");
// }

// Multer setup
// var storage = multer.diskStorage({
// 	destination: function (req, file, cb) {
// 		cb(null, "./uploads");
// 	},
// 	filename: function (req, file, cb) {
// 		cb(null, file.originalname);
// 	},
// });

const createProduct = async (req, res) => {
	try {
		const { title, description, price, stock } = req.body;
		const imageFiles = req.files; 
		console.log(imageFiles);

		if (!imageFiles || !Array.isArray(imageFiles)) {
			return res.status(400).json({ error: "Image files are required" });
		}

		// const imageUrls = await Promise.all(
		// 	imageFiles.map(async (file) => {
		// 		const result = await cloudinary.uploader.upload(file.path);
		// 		return result.secure_url;
		// 	})
		// );

		const newProduct = new ProductModel({
			title,
			description,
			price,
			stock,
			images: imageUrls,
		});

		const savedProduct = await newProduct.save();
		res.json(savedProduct);
	} catch (error) {
		console.error("Error creating product:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

const fetchProduct = (req, res) => {
	ProductModel.find({})
		.then((product) => res.json(product))
		.catch((err) => res.json(err));
};

const getProduct = (req, res) => {
	const id = req.params.id;
	ProductModel.findById({ _id: id })
		.then((product) => res.json(product))
		.catch((err) => res.json(err));
};

const updateProduct = (req, res) => {
	const id = req.params.id;
	ProductModel.findById(id);
};

const ProducDelete = (req, res) => {
	const id = req.params.id;
	ProductModel.findByIdAndDelete({ _id: id })
		.then((product) => res.json(product))
		.catch((err) => res.json(err));
};

module.exports = {
	createProduct,
	fetchProduct,
	getProduct,
	updateProduct,
	ProducDelete,
};
