const pool = require("../../configuration/databaseConnector.js");



module.exports = {

    addNewTask: (username, data, callback) => {

        let id;
        const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' ');

        pool.query("SELECT id FROM user WHERE user_name = ?", [username],
            (error, userResults, fields) => {
                if (error) {
                    return callback(error);
                };
                id = userResults[0].id;

                pool.query("INSERT INTO task (created_at, description, is_completed, name, user_id) VALUES (?, ?, ?, ?, ?)",
                    [
                        createdAt,
                        data.description,
                        data.isCompleted,
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

    getInCompletedTask: (username, callback) => {

        let id;

        pool.query("SELECT id FROM user WHERE user_name = ?", [username],
            (error, userResults, fields) => {
                if (error) {
                    return callback(error);
                };

                id = userResults[0].id;

                pool.query("SELECT * FROM task WHERE user_id = ? AND is_completed = false", [id],
                    (error, results, fields) => {
                        if (error) {
                            return callback(error);
                        }
                        const modifyResults = results.map(task => ({
                            id: task.id,
                            createdAt: task.createdAt,
                            description: task.description,
                            isCompleted: task.is_completed[0] === 1,
                            name: task.name,
                            user_id: task.user_id
                        }))
                        return callback(null, modifyResults);
                    });
            });
    },

    getCompletedTasks: (username, callback) => {

        let id;

        pool.query("SELECT id FROM user WHERE user_name = ?", [username],
            (error, userResults, fields) => {
                if (error) {
                    return callback(error);
                }
                id = userResults[0].id;

                pool.query("SELECT * FROM task WHERE user_id = ? AND is_completed = true", [id],
                    (error, results, fields) => {
                        if (error) {
                            return callback(error);
                        }

                       const modifyResults = results.map(task => ({
                            id: task.id,
                            createdAt: task.createdAt,
                            description: task.description,
                            isCompleted: task.is_completed[0] === 1,
                            name: task.name,
                            user_id: task.user_id
                        }))
                        return callback(null, modifyResults);
                    });
            })
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

    updateTask: (id, data, callback) => {
        pool.query(`UPDATE task SET created_at=?, description=?, is_completed=?, name=? WHERE id=?`,
            [
                data.created_at,
                data.description,
                data.isCompleted,
                data.name,
                id
            ], (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            });
    },

    completeTask: (id, callback) => {
        pool.query("UPDATE task SET is_completed = true where id = ?", [id],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            })
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