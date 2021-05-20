const router = require("express").Router();

// referencing the siblings files and api folder
const apiIndexRoutes = require("./api/index.js"); // this file references all of the api folder files 
const dashboardRoutes = require("./dashboard-routes");
const homeRoutes = require("./home-routes.js");

// routing use
router.use("/api", apiIndexRoutes);
router.use("/dashboard", dashboardRoutes); 
router.use("/", homeRoutes); // sets the home route for the browser.  

// exporting the file use 
module.exports = router;