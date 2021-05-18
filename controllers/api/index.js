// This index script brings in the api routes together <3 
const router = require("express").Router();

/*Use the express.Router class to create modular, 
mountable route handlers. A Router instance is a complete 
middleware and routing system; for this reason, it is often 
referred to as a “mini-app”. */


// reference the sibling API routes in the API folder. 
const commentRoutes = require("./comment-routes");
const postRoutes = require("./post-routes");
const userRoutes = require("./user-routes");


// 
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);
router.use("/user", userRoutes); 


// exporting to be used elsewhere.
module.exports = router; 


// references 

/*
. https://expressjs.com/en/guide/routing.html
.
.
.
.

*/