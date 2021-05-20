/* This index sccipt brings the models working together <3 */

// reference the sibling files. - Each file must have an export. 
const Comment = require("./Comment.js");
const Post = require("./Post.js");
const User = require("./User.js");


/* What are we doing with the models */

// will be used in schema - mySQL - need to create schema first




// export to be used in other files - exporting as an object. 
module.exports = {Comment, Post, User}; // used in home-routes 