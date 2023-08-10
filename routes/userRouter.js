const express = require("express");
const userRouter = express.Router();
const path = require("path");
const User = require("../controller/user");

userRouter.get("/", User.getAllUser);
userRouter.post("/create", User.createUser);
userRouter.post("/login", User.userLogin);
userRouter.get("/getUser/:id", User.getUser);
userRouter.put("/updateUser/:id", User.updateUser);
userRouter.delete("/userDelete/:id", User.userDelete);

userRouter.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"));
  });  

module.exports = userRouter;
