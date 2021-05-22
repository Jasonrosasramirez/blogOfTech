const router = require("express").Router();
const {Comment, Post, User} = require("../models/"); // just the models folder

// home 
router.get("/", async (req, res) => {
    try {
        const tweetPost = await Post.findAll({
            include: [User], 
        }); 

        const posts = tweetPost.map((post) => post.get({ plain: true }));
        res.render("all-post", {posts}); 
    
    }   catch (err) {
            console.log("error on home routes /home");
            res.status(500).json(err);
    }

}); 

// login here :D 
router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/"); // ET phone home.  
        return; // comes out. 
    }

    res.render("login"); // renders the page in response. 
});







// exporting file 
module.exports = router; 