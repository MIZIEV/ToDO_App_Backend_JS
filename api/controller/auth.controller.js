const { register } = require("../service/auth.service.js");
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

    }
}