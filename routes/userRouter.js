const express = require("express");
const userRouter = express.Router();
const User = require("../controller/user");

userRouter.post("/create", User.createUser);
userRouter.get("/", User.fetchuser);
userRouter.get("/getUser/:id", User.getUser);
userRouter.put("/updateUser/:id", User.updateUser);
userRouter.delete("/userDelete/:id", User.userDelete);

module.exports = userRouter;
