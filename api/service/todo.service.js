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
    },

    getAllTodos: (todoId, callback) => {
        pool.query("SELECT * FROM todo WHERE todo_id = ?", [todoId],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }

                const modifyResults = results.map(todo => ({
                    id: todo.id,
                    isCompleted: todo.is_completed[0] === 1,
                    todoName: todo.todo_name,
                    todo_id: todo.todo_id
                }))

                return callback(null, modifyResults);
            });
    },

    deleteTodo: (todoId, callback) => {
        pool.query("DELETE FROM todo WHERE id = ?", [todoId],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            });
    },

    toggleTodoCompletion: (todoId, callback) => {
        pool.query("UPDATE todo SET is_completed = NOT is_completed WHERE id = ?", [todoId],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            });
    }
};