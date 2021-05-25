// requiring basic info
const { urlencoded } = require("body-parser");
const express = require("express");
const handleBars = require("express-handlebars");
const session = require("express-session");
const path = require("path");
const helpers = require("./utils/helpers")

// express server settings (The framework)
const app = express();
const PORT = process.env.PORT || 3008; //Allows for connection to the server.

// sequelize 
const sequelize = require("./config/connection"); // references the mysql connection.  
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: "secret",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({ db: sequelize })
};

app.use(session(sess));

// handlebars connection 
const exphbs = handleBars.create({ helpers });
app.engine("handlebars", exphbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({
        extended: false
    }
));
app.use(express.static(path.join(__dirname, "./public"))); 
app.use(require("./controllers/"));
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
    sequelize.sync({
        force: false
    })
});

// npm i express-handlebars sequelize mysql2 dotenv bcrypt
// npm i express-session connect-session-sequelize 