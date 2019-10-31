var express = require("express");
var routes = express.Router();

/** requires all classes that handles routes */
var UserRoute = require("./route/UserRoute");
var CourseRoute = require("./route/CourseRoute");
var CourseStudentRoute = require("./route/CourseStudentRoute");
var UnitRoute = require("./route/UnitRoute.js");
const fileRoute = require('./route/file.route')
const questionRoute = require('./route/QuestionRoute')


/** routes the request to the specified class */
routes.use("/user", UserRoute);
routes.use("/course", CourseRoute);
routes.use("/coursestudent", CourseStudentRoute);
routes.use("/unit", UnitRoute);
routes.use('/admin/file',fileRoute);
routes.use('/question',questionRoute);

module.exports = routes;
