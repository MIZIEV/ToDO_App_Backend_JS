const { addNewTask, getInCompletedTask, getOneTask, getCompletedTask, updateTask, completeTask, deleteTask } = require("../controller/task.controller.js");
const router = require("express").Router();
const { checkToken } = require("../../configuration/jwtValidator.js");
const taskSjonValidator = require("../util/taskJsonValidator.js");


router.post("/add/:username", checkToken, taskSjonValidator, addNewTask);
router.get("/list/:username", checkToken, getInCompletedTask);
router.get("/list/completed/:username", checkToken, getCompletedTask);
router.get("/:id/:username", checkToken, getOneTask);
router.put("/:id/:username", checkToken, updateTask);
router.patch("/:id/complete/:username", checkToken, completeTask);
router.delete("/delete/:id/:username", checkToken, deleteTask);

module.exports = router;