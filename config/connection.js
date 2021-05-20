/*  creates the teather for the myDQL databases.  */ 

// imports the sequalize library
const Sequelize = require("sequelize"); 
require("dotenv").config(); // imports DB values from the .env file. 

const sequalize = new Sequelize(
    // DB_ values from .env file
    
    process.env.DB_NAME, // will be TechBlogger_DB. 
    process.env.DB_USER, // will be root. 
    process.env.DB_PASSWORD, 

    {
        host: "localhost",
        dialect: "mysql", 
        port: 3306, // unique port for db. 
            // server is using 3008. 
    }
); 


// exporting the object containing the DB information. 
module.export = sequalize; // being used in model folder information. 
