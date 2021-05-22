const router = require("express").Router();
const {Post} = require("../../models/index.js"); // referencing the user model
const withAuth = require("../../utils/auth");

// Home :D I'm Home :D 
router.post("/", withAuth, async (req, res) => {
    const body = req.body;

    try {
        const newPost = await Post.create({ ... body, userId: req.session.userId});
        res.json(newPost); // displays the variable above as a json format. 

    } catch (err) {
        res.status(500).json(err); // if there is an error, it will be displayed in json format.
    }

}); 