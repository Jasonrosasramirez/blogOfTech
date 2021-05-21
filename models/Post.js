const sequelize = require('../config/connection.js'); // the exported sequalize class from connection.js
const { Sequelized, Model, Datatypes } = require("sequelize");

class Post extends Model {}

Post.init(

    {
        title: Datatypes.STRING, 
        body: Datatypes.STRING
    }, 

    {
        sequelize
    }
); 

// exporting for ./models/index.js
module.exports = Post; 