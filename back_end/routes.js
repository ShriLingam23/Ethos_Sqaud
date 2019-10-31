var express = require("express");
var routes = express.Router();

/** requires all classes that handles routes */
var UserRoute = require("./user/UserRoute");
var CourseRoute = require("./Course/CourseRoute");
var CourseStudentRoute = require("./CourseStudent/CourseStudentRoute");
/** routes the request to the specified class */
routes.use("/user", UserRoute);
routes.use("/course", CourseRoute);
routes.use("/coursestudent", CourseStudentRoute);

module.exports = routes;
