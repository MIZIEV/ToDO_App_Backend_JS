const { addNewTask, getAllTasks, getOneTask, getCompletedTask, updateTask, completeTask, deleteTask } = require("../controller/task.controller.js");
const router = require("express").Router();
const { checkToken } = require("../../configuration/jwtValidator.js");


router.get("/list/:username", checkToken, getAllTasks);
router.get("/:id/:username", checkToken, getOneTask);
router.get("/list/completed/:username", checkToken, getCompletedTask);
router.post("/add/:username", checkToken, addNewTask);
router.patch("/:id/complete/:username", checkToken, completeTask);
router.put("/:id/:username", checkToken, updateTask);
router.delete("/delete/:id/:username", checkToken, deleteTask);

module.exports = router;