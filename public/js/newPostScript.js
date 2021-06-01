const newTweet = async function(event) {
    event.preventDefault();

    const tweetHeader; 
    const tweetBody; 

    await fetch("/api/post", {
        method: "POST", 
        body: JSON.stringify({
            title, 
            body,
        }), 
        headers: {"Content-Type": "application/json"}, 
    }); 

    document.location.replace("dashboard");
}; 