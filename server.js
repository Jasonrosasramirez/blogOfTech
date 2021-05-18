// requiring basic info
const express = require("express");
const handleBars = require("express-handlebars");
const session = require("express-session");
const path = require("path");

// const sequelize
const SequelizeStore = require("connect-session-sequalize")(session.Store);

// express server settings (The framework)
const app = express();
const PORT = process.env.PORT || 3008; //Allows for connection to the server.

