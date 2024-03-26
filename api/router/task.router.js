const { addNewTask, getAllTasks, getOneTask, updateTask, deleteTask } = require("../controller/task.controller.js");
const router = require("express").Router();
const { checkToken } = require("../../configuration/jwtValidator.js");


router.get("/list/:username", checkToken, getAllTasks);
router.get("/:id", getOneTask);
router.post("/add/:username", addNewTask);
router.put("/:id", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;