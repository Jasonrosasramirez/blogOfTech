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