const pool = require("../../configuration/databaseConnector.js");

module.exports = {
    updateUser: (username, data, callBack) => {
        pool.query("UPDATE user SET user_email=?, name=?, password=?, user_name=? WHERE user_name=?",
            [
                data.email,
                data.name,
                data.password,
                data.username,
                username
            ], (error, results, fields) => {
                if (error) {
                    return callBack(error);
                };
                return callBack(null, results);
            })
    },
    deleteUser: (username, callBack) => {
        pool.query("DELETE FROM user WHERE user_name=?", [username],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                };
                return callBack(null, results);
            });
    }
};