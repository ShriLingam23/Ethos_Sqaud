var express = require("express");
var routes = express.Router();

/** requires all classes that handles routes */
var UserRoute = require("./UserService/UserRoute");
var CourseRoute = require("./CourseService/CourseRoute");
var CourseStudentRoute = require("./CourseStudentService/CourseStudentRoute");
/** routes the request to the specified class */
routes.use("/user", UserRoute);
routes.use("/course", CourseRoute);
routes.use("/coursestudent", CourseStudentRoute);

module.exports = routes;
