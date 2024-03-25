const { register, login } = require("../controller/auth.controller.js");
const userRouter = require("express").Router();
const { checkToken } = require("../../configuration/jwtValidator.js");

userRouter.post("/register", register);
userRouter.post("/login", login);


module.exports = userRouter;