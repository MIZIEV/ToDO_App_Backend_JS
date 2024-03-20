const { addNewTask, getAllTasks, getOneTask, updateTask, deleteTask } = require("../controller/task.controller.js");
const router = require("express").Router();


router.get("/list", getAllTasks);
router.get("/:id", getOneTask);
router.post("/add", addNewTask);
router.put("/:id", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;