const Sequelize = require("sequelize");
require("dotenv").config();

/*  creates the teather for the myDQL databases.  */ 

  const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );

// exporting the object containing the DB information. 
module.exports = sequelize; // being used in model folder information. 
