/* This index sccipt brings the models working together <3 */

// reference the sibling files. - Each file must have an export. 
const Comment = require("./Comment.js");
const Post = require("./Post.js");
const User = require("./User.js");


/* models are used to make editing mySQL easier */

// will be used in schema - mySQL




// export to be used in other files - exporting as object. 
module.exports = {Comment, Post, User}; 