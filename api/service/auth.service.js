const pool = require("../../configuration/databaseConnector.js");
const validator = require("validator");

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
    login: (usernameOrEmail, callBack) => {

        let query;
        if (validator.isEmail(usernameOrEmail)) {
            query = "SELECT * FROM user WHERE user_email = ?";
        } else {
            query = "SELECT * FROM user WHERE user_name = ?";
        }


        pool.query(query, [usernameOrEmail],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            });
    }
};