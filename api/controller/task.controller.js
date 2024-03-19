const { addNewTask, getAllTasks } = require("../service/task.service.js");


module.exports = {
    addNewTask: (req, res) => {

        const body = req.body;

        addNewTask(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error."
                });
            };
            return res.status(201).json({
                success: 1,
                data: results
            });
        });
    },

    getAllTasks: (req, res) => {
        getAllTasks((err, results) => {
            if (err) {
                console.log(err);
                return;
            };
            return res.json({
                success: 1,
                data: results
            });
        });
    }

};