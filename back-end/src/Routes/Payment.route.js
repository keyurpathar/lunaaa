const express = require("express");
const { createPayment } = require("../Controllers/Payment.controller");
const PaymetRouter = express.Router();


PaymetRouter.post("/", createPayment)


module.exports = PaymetRouter
