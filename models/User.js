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

User.init(
    {
    id: {
        type: DataTypes.INTEGER, //sets the datatype as integer
        allowNull: false, // cannot be empty 
        primaryKey: true, // this is the primery key of the table 
        autoIncrement: true // increases the id number by 1. 
    }, 

    username: {
        type: DataTypes.STRING,
        allowNull: false
    }, 

    password: { 
        type: DataTypes.STRING,
        allowNull: false, 
        validate: { len: [4] }
    }
}, 

{
    hooks: {
        beforeCreate: async (userData_New) => {
            userData_New.password = await bcrypt.hash(userData_New.password, 10);
            return userData_New; 
        }, 

        beforeUpdate: async (userData_Updated) => {
            userData_Updated.password = await bcrypt.hash(userData_Updated.password, 10);
            return userData_Updated; 
        }
    }


}




)