const { body, validationResult } = require("express-validator");

const validateContact = (req, res, next) => {

    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({
            error: error.array()
        })
    }

    next()

}

const contactRules = [

    body("number")
        .isNumeric()
        .withMessage("Mobile Number must be number")
        .notEmpty()
        .withMessage("number is required")
        .isLength({ min: 10, max: 10 })
        .withMessage("please provide an valid number"),

    validateContact


]

module.exports = contactRules