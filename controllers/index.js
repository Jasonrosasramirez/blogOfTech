const router = require("express").Router();

// referencing the siblings files and api folder
const apiIndex = require("./api/index.js"); // this file references all of the api folder files 
const dashboardRoutes = require("./dashboard-routes");
const homeRoutes = require("./home-routes.js");

