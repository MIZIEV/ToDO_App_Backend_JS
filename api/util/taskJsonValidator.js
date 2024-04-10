const taskSjonValidator = (req, res, next) => {
    const { description, isCompleted, name } = req.body;

    const errors = [];

    if (!description || description.length < 5) {
        errors.push("Validation error: filed `description` must be longer than 5 characters!")
    }
    if (isCompleted === undefined || isCompleted === null) {
        errors.push("Validation error: field `isCompleted` musn't be null!")
    }
    if (!name || name.length < 5) {
        errors.push("Validation error: filed `name` must be longer than 5 characters!")
    }

    if (errors.length > 0) {
        return res.status(400).json(errors);
    }

    next();
};

module.exports = taskSjonValidator;