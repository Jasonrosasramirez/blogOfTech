const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection.js'); // the exported sequalize class from connection.js

class Comment extends Model {}

Comment.init(
    {
        body: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },

    {
        sequelize
    }
);

// exporting to be used in index in modules folder 
module.exports = Comment;
