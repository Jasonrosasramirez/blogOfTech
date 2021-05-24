const router = require("express").Router();
const { Router } = require("express");
const { User } = require("../../models");

// Home section
router.post('/', async (req, res) => {
    try {
        // base case scenario.

        const newUser = await User.create({
        
            username: req.body.username, // will store as the username
            password: req.body.password, // will store as the password
        });
  
        req.session.save(() => {
            // session middleware. 
            // save to the contents of the store. Saves in memory. 
            req.session.userId = newUser.id;
            req.session.username = newUser.username;
            req.session.loggedIn = true;
  
            res.json(newUser); // displays the user information as as json format.
        });

    } catch (err) {
        // if there is an error     
        res.status(500).json(err);  // display that error as a json format.
    }

});

// login section 
router.post("/login", async (req, res) => {
    try {
        // Varaible to represent the user object
        const user = await User.findOne({
            where: {
                usermame: req.body.username,
            }, 
        });

        // returns if the user has a valid password. 
        const isPasswordValid = user.checkPassword(req.body.password);


        // check if the assets are in place
        if (!user) {    // if the user is not available
            res.status(400).json({message: "A user acount is missing :("}); // send the error message as a json with the object element message. 
            return; 
        }

        if (!isPasswordValid) { // if the password is not available 
            res.status(400).json({message: "A password is missing"});
            return; 
        }


        // save session information 
        

    } catch (err) { 
        res.status(400).json({message: "A user account could not be found :("}); 
    }

});

// logoff section 
router.post("/logout", async (req, res) => {
    try {


    } catch (err) {


    }


});


// exporting information 
module.exports = router; 