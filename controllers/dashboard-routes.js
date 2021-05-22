const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth.js');

router.get("/", withAuth, async (req, res) => {
    try {
        // best case scenario
        const tweetPost = await Post.findAll({
            where: {
                userId: req.session.userId,                
            }, 
        }); 

        const posts = tweetPost.map((post) => post.get({ plain: true }));
    
    
    
    
    } catch (err) {
        res.redirect("login");
    }

})