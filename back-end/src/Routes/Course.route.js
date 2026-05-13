const express = require("express");
const { addCourse, getCourses, deleteCourse, updateCourse } = require("../Controllers/Course.controller");
const CourseRouter = express.Router();

CourseRouter.get('/', getCourses);
CourseRouter.post('/addCourse', addCourse);
CourseRouter.delete('/deleteCourse/:id', deleteCourse);
CourseRouter.patch('/updateCourse/:id', updateCourse);







module.exports = CourseRouter