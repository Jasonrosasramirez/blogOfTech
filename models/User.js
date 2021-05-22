const sequelize = require('../config/connection.js'); // the exported sequalize class from connection.js
const { Model, DataTypes } = require("sequelize"); 
const bcrypt = require("bcrypt"); // hashng for password security platform 

class User extends Model {
    passwordVerification(loginPassword) {
        return bcrypt.compareSync(loginPassword, this.loginPassword);

        /*
        . bcrypt for secure password.
        . this. is used for creating this instance of a loginPassword.
            . Will be unique per object creation.
        .   
        .
        */  
    }
}

User.init({
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        primaryKey: true, 
        autoIncrement: true
    }, 

})