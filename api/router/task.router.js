const { addNewTask, getAllTasks, deleteTask } = require("../controller/task.controller.js");
const router = require("express").Router();


router.get("/list", getAllTasks);
router.post("/add", addNewTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;