const { updateUser, deleteUser } = require("../service/user.service.js");
const { genSaltSync, hashSync, compareSync } = require("bcrypt")

module.exports = {
    updateUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        const username = req.params.username;

        body.password = hashSync(body.password, salt);

        updateUser(username, body, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!result) {
                return res.json({
                    success: 0,
                    message: "Failed to update user!"
                });
            };
            return res.status(200).json({
                success: 1,
                message: "User updated!"
            });
        });
    },

    deleteUser: (req, res) => {
        const username = req.params.username;

        deleteUser(username, (err, reult) => {
            if (err) {
                console.log(err);
                return;
            };
            return res.status(200).json({
                success: 1,
                message: "User deleted!"
            });
        })
    }
}