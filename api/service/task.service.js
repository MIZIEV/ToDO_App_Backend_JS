const pool = require("../../configuration/databaseConnector.js");



module.exports = {

    getAllTasks: (username, callback) => {
        pool.query("SELECT id FROM user WHERE user_name = ?", [username],
            (error, userResults, fields) => {

                let id;

                if (error) {
                    return callback(error);
                };

                id = userResults[0].id;

                pool.query("SELECT * FROM task WHERE user_id = ?", [id],
                    (error, results, fields) => {
                        if (error) {
                            return callback(error);
                        }
                        return callback(null, results);
                    });
            });


    },

    getOneTask: (id, callback) => {
        pool.query("SELECT * FROM task WHERE id=?", [id],
            (error, result, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, result[0]);
            });
    },

    addNewTask: (username, data, callback) => {

        let id;

        pool.query("SELECT id FROM user WHERE user_name = ?", [username],
            (error, userResults, fields) => {
                if (error) {
                    return callback(error);
                };
                id = userResults[0].id;

                pool.query("INSERT INTO task (created_at, description, is_completed, name, user_id) VALUES (?, ?, ?, ?, ?)",
                    [
                        data.created_at,
                        data.description,
                        data.is_completed,
                        data.name,
                        id
                    ], (error, results, fields) => {
                        if (error) {
                            return callback(error);
                        }
                        return callback(null, results);

                    });
            });
    },

    updateTask: (id, data, callback) => {
        pool.query(`UPDATE task SET created_at=?, description=?, is_completed=?, name=? WHERE id=?`,
            [
                data.created_at,
                data.description,
                data.is_completed,
                data.name,
                id
            ], (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            });
    },

    deleteTask: (id, callback) => {
        pool.query("DELETE FROM task WHERE id=?", [id],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                };
                return callback(null, results);
            });
    }
};