/* This index sccipt brings the models working together <3 */

// reference the sibling files. - Each file must have an export. 
const Comment = require("./Comment");
const Post = require("./Post");
const User = require("./User");


/* What are we doing with the models */
Post.belongsTo(User, {
    foreignKey: "userId", 
    onDelete: "CASCADE"
}); 

Post.hasMany(Comment, {
    foreignKey: "postId", 
    onDelete: "CASCADE"
}); 

// will be used in schema - mySQL - need to create schema first




// export to be used in other files - exporting as an object. 
module.exports = {Comment, Post, User}; // used in home-routes 