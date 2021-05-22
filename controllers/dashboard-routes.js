const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth.js');

// main 
router.get("/", withAuth, async (req, res) => {
    try {
        // best case scenario
        const tweetPost = await Post.findAll({
            where: {
                userId: req.session.userId,                
            }, 
        }); 

        const posts = tweetPost.map((post) => post.get({ plain: true }));
        res.render("all-post-admin", {
            layout: "dashboard", 
            posts, 
        });
    
    } catch (err) {
        res.redirect("login");
        console.log("error with dashbord main / ");
    }
}); 

router.get('/new', withAuth, (req, res) => {
    res.render('new-post', {
      layout: 'dashboard',
    });
    
  });