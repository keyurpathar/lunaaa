const { body, validationResult } = require("express-validator");

const validateResult = (req, res, next) => {

    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({
            error: error.array()
        })
    }

    next()

}

const registrationRules = [

    body("name")
        .isString()
        .withMessage("username must be string")
        .notEmpty()
        .withMessage("name is required")
        .isLength({ min: 1, max: 8 })
        .withMessage("please provide an valid username"),

    body("email")
        .notEmpty()
        .withMessage("email is required")
        .isEmail("enter valid email")
        .withMessage("please enter an valid email"),

    body("password")
        .notEmpty()
        .withMessage("password id required")
        .isLength({ min: 6 })
        .withMessage("passoword must contains atlist 6 letters"),

    validateResult


]

module.exports = registrationRules