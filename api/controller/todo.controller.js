const { addNewTodo } = require("../service/todo.service.js");


module.exports = {
    addNewTodo: (req, res) => {
        const data = req.body;
        const id = req.params.id


        addNewTodo(id, data, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error."
                });
            }
            return res.status(201).json({
                success: 1,
                data: results
            })

        })
    }
}