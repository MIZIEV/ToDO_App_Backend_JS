const { addNewTask, getAllTasks, getOneTask, updateTask, deleteTask } = require("../controller/task.controller.js");
const router = require("express").Router();
const { checkToken } = require("../../configuration/jwtValidator.js");


router.get("/list/:username", checkToken, getAllTasks);
router.get("/:id/:username", checkToken, getOneTask);
router.post("/add/:username", checkToken, addNewTask);
router.put("/:id", updateTask);
router.delete("/delete/:id/:username", checkToken, deleteTask);

module.exports = router;