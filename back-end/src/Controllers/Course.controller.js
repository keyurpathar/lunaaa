
const courseModel = require("../Models/Course.model");

const addCourse = async (req, res) => {

    try {

        const { name, details, price, discount, img_url, fullDetails } = req.body;

        const existCourse = await courseModel.findOne({ name });

        if (existCourse) {
            return res.status(400).json({
                success: false,
                message: "Course already exists"
            });
        };

        const newCourse = await courseModel.create({ name, details, price, discount, img_url, fullDetails });

        if (!newCourse) return res.status(400).json({
            success: false,
            message: "Course not created",
            data: null
        });

        res.status(201).json({
            success: true,
            message: "Course created successfully",
            data: newCourse
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message,
            data: null
        });

    }

}

const getCourses = async (req, res) => {

    try {

        const courses = await courseModel.find();

        if (!courses) return res.status(404).json({
            success: false,
            message: "No courses found",
            data: null
        });

        res.status(200).json({
            success: true,
            message: "Courses retrieved successfully",
            data: courses
        });

    }

    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            data: null
        });
    }
}

const deleteCourse = async (req, res) => {

    try {
        const { id } = req.params;

        const deletedCourse = await courseModel.findByIdAndDelete(id);

        if (!deletedCourse) return res.status(404).json({
            success: false,
            message: "Course not found",
            data: null
        });

        res.status(200).json({
            success: true,
            message: "Course deleted successfully",
            data: deletedCourse
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            data: null
        });
    }
}

const updateCourse = async (req, res) => {

    try {
        const { id } = req.params;
        const { name, details, price, discount, img_url, fullDetails } = req.body;

        const updatedCourse = await courseModel.findByIdAndUpdate(id, { name, details, price, discount, img_url, fullDetails }, { new: true });

        if (!updatedCourse) return res.status(404).json({
            success: false,
            message: "Course not found",
            data: null
        });

        res.status(200).json({
            success: true,
            message: "Course updated successfully",
            data: updatedCourse
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            data: null
        });
    }
}

module.exports = { addCourse, getCourses, deleteCourse, updateCourse }