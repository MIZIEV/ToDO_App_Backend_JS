const pool = require("../../configuration/databaseConnector.js");



module.exports = {
    getAllTasks: calback => {
        pool.query("SELECT * FROM task", [],
            (error, results, fields) => {
                if (error) {
                    return calback(error);
                }
                return calback(null, results);
            });
    },

    getOneTask: (id, calback) => {
        pool.query("SELECT * FROM task WHERE id=?", [id],
            (error, result, fields) => {
                if (error) {
                    return calback(error);
                }
                return calback(null, result[0]);
            });
    },

    addNewTask: (data, calback) => {
        pool.query(`INSERT INTO task (created_at, description, is_completed, name) VALUES (?, ?, ?, ?)`,
            [
                data.created_at,
                data.description,
                data.is_completed,
                data.name
            ], (error, results, fields) => {
                if (error) {
                    return calback(error);
                }
                return calback(null, results);

            });
    },

    updateTask: (id, data, calback) => {
        pool.query(`UPDATE task SET created_at=?, description=?, is_completed=?, name=? WHERE id=?`,
            [
                data.created_at,
                data.description,
                data.is_completed,
                data.name,
                id
            ], (error, results, fields) => {
                if (error) {
                    return calback(error);
                }
                return calback(null, results);
            });
    },

    deleteTask: (id, calback) => {
        pool.query("DELETE FROM task WHERE id=?", [id],
            (error, results, fields) => {
                if (error) {
                    return calback(error);
                };
                return calback(null, results);
            });
    }
};