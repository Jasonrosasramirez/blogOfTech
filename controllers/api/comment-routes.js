/* will work on models/Comments.js file. */

// importing the required file 
const router = require("express").Router(); // will be our route handler
const { Comment } = require("../../models/"); // using the comment object after the index file has made edits to it
const withAuth = require('../../utils/auth');

// ET Phone Home 
router.post('/', withAuth, async (req, res) => {
  try {
    // best case scenario 

    const newComment = await Comment.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(newComment); // response is the new comment in json format

  } catch (err) {
    res.status(500).json(err); // if there is an error, display the error in json format
  }

});

// exporting models 
module.exports = router;



