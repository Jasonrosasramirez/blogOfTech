const sequelize = require('../config/connection.js'); // the exported sequalize class from connection.js
const { Sequelized, Model, DataTypes } = require("sequelize");

class Post extends Model {}

Post.init(

    {
        title: DataTypes.STRING, 
        body: DataTypes.STRING
    }, 

    {
        sequelize
    }
); 

// exporting for ./models/index.js
module.exports = Post; 