// This brings in the api routes together <3 
const router = require("express").Router();

const commentRoutes = require("./comment-routes");
const postRoutes = require("./post-routes");
const userRoutes = require("./user-routes");





module.exports = router; // exporting to be used elsewhere. 