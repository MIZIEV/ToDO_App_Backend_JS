const { updateUser } = require("../controller/user.controller.js");
const userRouter = require("express").Router();

userRouter.put("/:username", updateUser);


module.exports = userRouter;
