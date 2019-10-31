var express = require("express");
var routes = express.Router();

/** requires all classes that handles routes */
var UserRoute = require("./user/UserRoute");
/** routes the request to the specified class */
routes.use("/user", UserRoute);

module.exports = routes;
