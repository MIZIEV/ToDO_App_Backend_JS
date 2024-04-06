const { sign } = require("jsonwebtoken");
const { register, login } = require("../service/auth.service.js");
const { genSaltSync, hashSync, compareSync } = require("bcrypt")

module.exports = {
    register: (req, res) => {

        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);

        register(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error!"
                });
            };
            return res.status(201).json({
                success: 1,
                message: results
            })
        });
    },

    login: (req, res) => {
        const body = req.body;

        login(body.usernameOrEmail, (err, results) => {
            if (err) {
                console.log(err);
            };
            if (!results) {
                res.json({
                    success: 0,
                    message: "Invalid email or password!"
                })
            };

            const result = compareSync(body.password, results.password);

            if (result) {
                results.password = undefined;
                const jsonToken = sign({ result: results }, "key", {
                    expiresIn: "1h"
                });
                return res.json({
                    success: 1,
                    message: "Login is successfully!",
                    accessToken: jsonToken,
                    username: results.user_name
                });
            } else {
                return res.json({
                    success: 0,
                    message: "Invalid email or password"
                });
            };
        });
    }
}