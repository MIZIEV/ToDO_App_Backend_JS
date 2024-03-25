const pool = require("../../configuration/databaseConnector.js");

module.exports = {
    register: (data, callBack) => {
        pool.query("INSERT INTO user (role, user_email, name, password, user_name) VALUES (?, ?, ?, ?, ?)", [
            data.role = "ROLE_USER",
            data.email,
            data.name,
            data.password,
            data.username
        ], (error, results, fields) => {
            if (error) {
                return callBack(error);
            };
            return callBack(null, results);
        });
    },
    login: (email, callBack) => {
        pool.query("SELECT * FROM user WHERE user_email = ?", [email],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            });
    }
};