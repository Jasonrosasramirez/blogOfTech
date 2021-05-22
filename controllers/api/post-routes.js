const router = require("express").Router();
const {Post} = require("../../models/index.js"); // referencing the user model
const withAuth = require("../../utils/auth.js");

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

// id section 
router.put("/:id", withAuth, async (req, res) =>{
    try {
        // if all goes well. 
        const [intendedRows] = await Post.update(req.body, {
            where: { // used to describe the scope of search. 
                id: req.params.id,
            }, 
        }); 

    } catch (err) {
        res.status(500).json(err); // displays the error as a json format
    }

}); 

// get deleted. Get, get deleted. 
router.delete("/:id", withAuth, async (req, res) => {
    try {
        // best case scenario
        const [intendedRows] = Post.destroy({
            where: { // what is considered in scope.
                id: req.params.id,
            },
        });

        // the actions 
        if (intendedRows <= 0 ) {
            // if there is nothing to delete.
            res.status(404).end(); // show there is a dead link.  
        } else {
            // greater than 0 means things were deleted correctly. 
            res.status(200).end();
        }

    } catch (err) {
        // if an error happens
        res.status(500).json(err); // display the error as a json format. 
    }

}); 

// exporting the route
module.exports = router; 