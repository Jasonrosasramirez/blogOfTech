// DOM Reference Variables 
const postId; // document.querySelector(" ").value;


/* -- Event Handlers -- */


// Edit the text body
const editTweet = async function(event) {
    event.preventDefault(); 

    // DOM references POST prevent default
    const tweetHeader; // document.querySelector.value;
    const tweetBody; // document.querySelector.value;

    // gather informtion from the target
    await fetch(`/api/post/${postId}`, {
        method: "PUT", // update an existing resource
        // JSON.stringify converts JavaScript object or value to a JSON string
        // the tweet post variables in this case 
        body: JSON.stringify({
            tweetHeader, 
            tweetBody
        }), 
        headers: {
            "Content-Type": "application/json"
        }
    }); 

    document.location.replace("/dashboard"); // updates the dashboard page where all of the posts are stored
};


// Delete the post entirely
const deleteTweet = async function(event) {

    // gather informtion from the target
    await fetch(`/api/post/${postId}`, {
        method: "DELETE" // Delete existing resource
    }); 

    document.location.replace("/dashboard"); // updates the dashboard page where all of the posts are stored

}; 


/* -- Call the Event Listeners */
// DOM Target Variables
const editTweet_Target; // document.querySelector("")
const deleteTweet_Target; // document.querySelector("")

// Edit Tweet -- Activates on click
// editTweet_Target.addEventListener("", editTweet);

// Delete Tweet -- Activates on click
// deleteTweet_Target.addEventListener("", deleteTweet);