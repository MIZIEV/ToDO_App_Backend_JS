const pool = require("../../configuration/databaseConnector.js");

module.exports = {


    addNewTodo: (todoId, data, callback) => {
        pool.query("INSERT INTO todo (is_completed, todo_name, todo_id) VALUES (?, ?, ?)", [
            data.isCompleted,
            data.todoName,
            todoId
        ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results)
            });
    }
};