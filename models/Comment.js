const sequelize = require('../config/connection.js'); // the exported sequalize class from connection.js

const { Sequelized, Model, Datatypes } = require("sequelize");

class Comment extends Model { }

Comment.init(
    {
        body: {
            type: Datatypes.STRING,
            allowNull: false
        }

    },

    {
        sequelize
    }
);

// exporting to be used in index in modules folder 
module.exports = Comment;
