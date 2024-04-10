const validator = require("validator");

const userJsonValidator = (req, res, next) => {

    const { name, username, email, password } = req.body;
    const errors = [];

    if (!name || name.length < 3) {
        errors.push("Validation error: field `name` must be longer than 3 characters!")
    }
    if (!username || username.length < 3) {
        errors.push("Validation error: field `username` must be longer than 3 characters!")
    }
    if (!validator.isEmail(email)) {
        errors.push("Validation error: invalid email!")
    }
    if (!password || password.length < 5) {
        errors.push("Validation error: field `password` must be longer than 5 characters!")
    }

    if (errors.length > 0) {
        return res.status(400).json(errors);
    }
    next();
};

module.exports = userJsonValidator;