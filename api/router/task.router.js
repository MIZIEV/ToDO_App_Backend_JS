const { addNewTask, getInCompletedTask, getOneTask, getCompletedTasks, updateTask, completeTask, deleteTask } = require("../controller/task.controller.js");
const router = require("express").Router();
const { checkToken } = require("../../configuration/jwtValidator.js");
const taskSjonValidator = require("../util/taskJsonValidator.js");


router.post("/add/:username", checkToken, taskSjonValidator, addNewTask);
router.get("/list/:username", checkToken, getInCompletedTask);
router.get("/list/completed/:username", checkToken, getCompletedTasks);
router.get("/:id", checkToken, getOneTask);
router.put("/:id", checkToken, updateTask);
router.patch("/:id/complete", checkToken, completeTask);
router.delete("/delete/:id", checkToken, deleteTask);

module.exports = router;