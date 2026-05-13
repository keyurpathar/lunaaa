const express = require("express");
const router = require("./Routes/Auth.route");
const app = express();
const cookieparser = require("cookie-parser");
const CourseRouter = require("./Routes/Course.route");
const { default: helmet } = require("helmet");
const ContactRouter = require("./Routes/Contact.route");
const PaymentRouter = require("./Routes/Payment.route")
const cors = require("cors")

// middlewares 
app.use(express.json())
app.use(cookieparser())
app.use(helmet())
app.use(cors())
app.use('/auth', router)
app.use('/course', CourseRouter)
app.use('/contact' , ContactRouter)
app.use('/payment' , PaymentRouter)

module.exports = app