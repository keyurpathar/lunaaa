const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    details: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: String,
        required: true
    },
    img_url: {
        type: String,
        required: true
    },
    fullDetails: {
        type: String,
        required: true
    }

}, { timestamps: true })


const courseModel = mongoose.model("course", courseSchema);

module.exports = courseModel;