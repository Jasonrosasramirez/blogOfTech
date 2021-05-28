const commentHandler = async function (event) {
    event.preventDefault(); // prevents the default state 

    // navigating through the DOM
    const postID = document.querySelector("input[name='post-id']").value;
    const postTextArea = document.querySelector("textarea['comment-body']").value;

    //if the text body already exists
    if (body) {
        await fetch("../../controllers/api/comment-routes.js", {

            // importing the information as an object. 
            method: "POST", 
            body:JSON.stringify({ postID, postTextArea }), // referencing the DOM variables 
            headers: {"Content-Type": "application.json"}
        });

        document.location.reload(); // reloading the page afterwards 
    }
};

// call the eventHandler above. Via click