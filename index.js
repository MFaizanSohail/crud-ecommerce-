const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const cookieParser = require("cookie-parser");
// const cloudinary = require("cloudinary").v2;
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// const multer = require("multer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(
	cors({
		origin: ["http://localhost:3000"],
		methods: ["GET", "POST"],
		credentials: true,
	})
);
app.use(express.json());
app.use(cookieParser());
// cloudinary.config({
// 	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// 	api_key: process.env.CLOUDINARY_API_KEY,
// 	api_secret: process.env.CLOUDINARY_API_SECRET,
// });

mongoose.set("strictQuery", false);

app.use("/users", userRouter);
app.use("/products", productRouter);

app.use(express.static(path.join(__dirname, "./client/dist")));
app.get("*", function (req, res) {
	res.sendFile(
		path.join(__dirname, "./client/dist/index.html"),
		function (err) {
			if (err) {
				res.status(500).send(err);
			}
		}
	);
});
const connectdb = async () => {
	const maxRetries = 5;
	let retries = 0;

	while (retries < maxRetries) {
		try {
			await mongoose.connect(process.env.MONGO_URL);
			console.log(`Connected to MongoDB: ${mongoose.connection.host}`);
			break; // Successfully connected, exit the loop
		} catch (err) {
			console.error(
				`Connection attempt ${retries + 1} failed: ${err.message}`
			);
			retries++;
			await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds before retrying
		}
	}
	if (retries === maxRetries) {
		console.error(
			`Failed to connect to MongoDB after ${maxRetries} attempts.`
		);
		process.exit(1);
	}
};
connectdb().then(() => {
	app.listen(PORT, () => {
		console.log("listening on port " + PORT);
	});
});
