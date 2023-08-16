const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: [{
        type: String,
        required: true,
    }],
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        default: 0, // Default stock value can be set as needed
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
        required: true,
    },
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
