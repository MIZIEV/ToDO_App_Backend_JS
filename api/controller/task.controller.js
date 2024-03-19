const { getAllTasks } = require("../service/task.service.js");


module.exports = {

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