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

// SignUp here :D 
router.get("/signup", (req,res) => {
    if (req.session.loggedIn) {
        res.redirect("/"); // brings us back to the home page. 
        return;
    }

    res.render("signup"); // brings up the render model. 
}); 

// for the post :D 
router.get("/post/:id", async (req, res) => {
    try {
        const tweetPost = await Post.findByPk(req.params.id, {
            include: [ User, {model: Comment, include: [User], } ],
        }); 

        if (tweetPost) {
            const post = tweetPost.get({ plain:true });
            res.render("single-post", {post});
        } else {
            res.status(404).end();
        }

    } catch (err) {
        res.status(500).json(err); 
    }

}); 

// exporting file 
module.exports = router; 