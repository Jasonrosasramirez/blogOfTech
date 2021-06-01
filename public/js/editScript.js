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



    
};

// Delete the post entirely
const deleteTweet = async function(event) {

    document; // document.querySelector.value;

}; 


/* -- Call the Event Listeners */
// document.addEventListener();