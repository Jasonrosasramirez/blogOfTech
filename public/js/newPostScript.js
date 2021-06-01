const newTweet = async function(event) {
    event.preventDefault();

    const tweetHeader = document.querySelector(" ").value; 
    const tweetBody = document.querySelector(" ").value; 

    await fetch("/api/post", {
        method: "POST", 
        body: JSON.stringify({
            tweetHeader, 
            tweetBody,
        }), 
        headers: {"Content-Type": "application/json"}, 
    }); 

    document.location.replace("dashboard");
}; 


// event handler 
// document.querySelector(" ").addEventListener(" ", newTweet); 