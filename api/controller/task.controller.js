const { addNewTask, getOneTask, getInCompletedTask, getCompletedTasks, updateTask, completeTask, deleteTask } = require("../service/task.service.js");


module.exports = {
    addNewTask: (req, res) => {

        const body = req.body;
        const username = req.params.username;

        addNewTask(username, body, (err, results) => {
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

    getInCompletedTask: (req, res) => {

        const username = req.params.username;

        getInCompletedTask(username, (err, results) => {
            if (err) {
                console.log(err);
                return;
            };
            return res.status(200).json(results);
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
            return res.status(200).json(results)
        });
    },

    getCompletedTask: (req, res) => {
        const username = req.params.username;

        getCompletedTasks(username, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.status(200).json(results);
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
            if (results.affectedRows === 0) {
                return res.status(404).json({
                    success: 0,
                    message: "Task not found!"
                });
            };
            return res.status(200).json(results);
        })
    },

    completeTask: (req, res) => {

        const id = req.params.id;

        completeTask(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({
                    success: 0,
                    message: "Task not found!"
                });
            };
            return res.status(200).json(results);
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