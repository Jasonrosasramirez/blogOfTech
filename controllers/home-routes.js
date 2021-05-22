const router = require("express").Router();
const {Comment, Post, User} = require("../models/"); // just the models folder

// home 
router.get("/", async (req, res) => {
    try {
        const tweetPost = await Post.findAll({
            include: [User], 
        }); 

        const posts = tweetPost.map((post) => post.get({ plain: true }));
    
    }

    catch (err) {
        console.log("error on home routes");
    }

}); 









// exporting file 
module.exports = router; 