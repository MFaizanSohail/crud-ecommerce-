const ProductModel = require("../model/ProductModel");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const createProduct = async (req, res) => {
	try {
		const { title, description, price } = req.body;
		const imageFile = req.files.image;

		const result = await cloudinary.uploader.upload(imageFile.path);

		const newProduct = new ProductModel({
			title,
			description,
			price,
			image: result.secure_url,
		});

		const savedProduct = await newProduct.save();
		res.json(savedProduct);
	} catch (error) {
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
