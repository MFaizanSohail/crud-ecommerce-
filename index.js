const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path"); 
const userRouter = require("./routes/userRouter");


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.use("/users", userRouter);

app.use(express.static(path.join(__dirname, "./client/dist"))); 
app.get("*", function (req, res) { 
  res.sendFile(path.join(__dirname, "./client/dist/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
