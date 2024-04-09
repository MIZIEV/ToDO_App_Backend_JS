const { updateUser, deleteUser } = require("../controller/user.controller.js");
const userRouter = require("express").Router();
const userJsonValidator = require("../util/userJsonValidator.js");

userRouter.put("/:username", userJsonValidator, updateUser);
userRouter.delete("/:username", deleteUser);

module.exports = userRouter;
