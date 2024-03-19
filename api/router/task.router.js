const { addNewTask, getAllTasks } = require("../controller/task.controller.js");
const router = require("express").Router();


router.get("/list", getAllTasks);
router.post("/add", addNewTask);

module.exports = router;