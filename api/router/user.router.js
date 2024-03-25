const { updateUser, deleteUser } = require("../controller/user.controller.js");
const userRouter = require("express").Router();

userRouter.put("/:username", updateUser);
userRouter.delete("/:username", deleteUser);

module.exports = userRouter;
