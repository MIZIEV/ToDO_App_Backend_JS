const { getAllTasks } = require("../controller/task.controller.js");
const router = require("express").Router();


router.get("/list", getAllTasks);

module.exports = router;