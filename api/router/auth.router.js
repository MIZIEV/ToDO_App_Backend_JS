const { register, login } = require("../controller/auth.controller.js");
const authRouter = require("express").Router();
const userJsonValidator = require("../util/userJsonValidator.js");

authRouter.post("/register", userJsonValidator, register);
authRouter.post("/login", login);


module.exports = authRouter;