const { addNewTask, getOneTask, getAllTasks, updateTask, deleteTask } = require("../service/task.service.js");


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
    },

    getOneTask: (req, res) => {
        const id = req.params.id;

        getOneTask(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.status(404).json({
                    success: 0,
                    message: "Task not found!"
                })
            }
            return res.status(200).json({
                success: 1,
                result: results
            })
        });
    },
    
    updateTask: (req, res) => {
        const id = req.params.id;
        const data = req.body;

        updateTask(id, data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.status(404).json({
                    success: 0,
                    message: "Task not found!"
                });
            };
            return res.status(200).json({
                success: 1,
                message: "Task updated."
            })
        })
    },

    deleteTask: (req, res) => {

        const id = req.params.id;

        deleteTask(id, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Server error!"
                });
            };
            if (results.affectedRows === 0) {
                return res.status(404).json({
                    success: 0,
                    message: "Task not found!"
                });
            };
            return res.status(200).json({
                success: 1,
                message: "Task deleted."
            })
        })
    }

};