const ProductModel = require("../model/ProductModel");

const createProduct = async (req, res) => {
    try {
        const { title, description, image, price } = req.body;
        const userId = req.user._id; // Assuming you have user data in the request

        const newProduct = new ProductModel({
            title,
            description,
            image,
            price,
            user: userId, // Assign the current user's ID to the product's user field
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

const ProducDelete = (req, res) => {
	const id = req.params.id;
	ProductModel.findByIdAndDelete({ _id: id })
		.then((product) => res.json(product))
		.catch((err) => res.json(err));
};

const updateProduct = (req, res) => {
	const id = req.params.id;
	ProductModel.findById(id);
};

module.exports = {
	createProduct,
	fetchProduct,
	getProduct,
	updateProduct,
	ProducDelete,
};
