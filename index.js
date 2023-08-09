const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const userRouter = require("./routes/userRouter");
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000; 
app.use(cors());
app.use(express.json());


// mongoose.connect("mongodb://127.0.0.1:27017/crud");


mongoose.set('strictQuery', false);

app.use("/users", userRouter);
const connectdb = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(`Connected: ${conn.connection.host}`);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
}


connectdb().then(() => {
	app.listen(PORT, () => {
		console.log(`Listening on port ${PORT}`);
	});
});

app.use(express.static(path.join(__dirname, "./client/dist")));
app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "./client/dist/index.html"), function (err) {
		if (err) {
			res.status(500).send(err);
		}
	});
});
