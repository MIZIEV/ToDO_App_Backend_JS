const todoJsonValidator = (req, res, next) => {
    const { isCompleted, todoName } = req.body;
    const errors = [];

    if (isCompleted === undefined || isCompleted === null) {
        errors.push("Validation error: field `isCompleted` musn't be null!")
    }

    if (!todoName || todoName.length < 4) {
        errors.push("Validation error: filed `name` must be longer than 4 characters!")
    }

    if (errors.length > 0) {
        return res.status(400).json(errors);
    }
    next();
}

module.exports = todoJsonValidator;