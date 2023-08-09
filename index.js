// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const path = require("path");
// const userRouter = require("./routes/userRouter");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 3000;
// app.use(cors());
// app.use(express.json());

// mongoose.set("strictQuery", false);

// app.use("/users", userRouter);
// app.use(express.static(path.join(__dirname, "./client/dist")));
// app.get("*", function (req, res) {
// 	res.sendFile(
// 		path.join(__dirname, "./client/dist/index.html"),
// 		function (err) {
// 			if (err) {
// 				res.status(500).send(err);
// 			}
// 		}
// 	);
// });

// const connectdb = async () => {
// 	try {
// 		await mongoose.connect(process.env.MONGO_URL);
// 	} catch (err) {
// 		console.error(err);
// 		process.exit(1);
// 	}
// };

// connectdb().then(() => {
// 	app.listen(PORT, () => {
// 		console.log(`Listening on port ${PORT}`);
// 	});
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const userRouter = require("./routes/userRouter");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);

app.use("/users", userRouter);
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
	try {
		await mongoose.connect(process.env.MONGO_URL);
		console.log("Connect : ${conn.connection.host}");
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};
connectdb().then(() => {
	app.listen(PORT, () => {
		console.log("listening on port " + PORT);
	});
});
