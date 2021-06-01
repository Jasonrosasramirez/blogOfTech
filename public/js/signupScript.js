const { response } = require("express"); // auto populated when I used " if (response) "

// where the magic happens
const signupHandler = async function(event) {
    event.preventDefault(); 

    const usernameE1; // document.querySelector(" ");
    const userPasswordE1; // document.querySelector(" ");

    const response = await fetch("/api/user", {
        method: "POST", // updates the current file. 
        body: JSON.stringify({
            username: usernameE1.value, 
            password: userPasswordE1.value, 
        }), 
        headers: {"Content-Type": "application/json"}, 
    }); 

    /* -- Did all go well -- */
    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        window.alert("Oh no! We couldn't sign you up."); 
    }

}; 


/* -- Event Handler -- */
const signupE1; // document.querySelector(" "); 

// event trigger 
signupE1.addEventListener("submit", signupHandler); 