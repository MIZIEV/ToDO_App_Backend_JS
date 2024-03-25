const { register, login } = require("../controller/auth.controller.js");
const authRouter = require("express").Router();
const { checkToken } = require("../../configuration/jwtValidator.js");

authRouter.post("/register", register);
authRouter.post("/login", login);


module.exports = authRouter;