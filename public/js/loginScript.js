const { response } = require("express");

const loginHandler = async function(event) {
    event.preventDefault();

    // connecting to the DOM
    const usernameE1 = document.querySelector();
    const passwordEl = document.querySelector(); 

    const fetchYourLogin = await fetch("../../controllers/api/user-routes.js", {
        method: "POST", 
        body: JSON.stringify({
            // changes the values into strings 
            username: usernameE1.value, // stores the DOM value as a variable 
            password: passwordEl.value, 
        }), 
        headers: {"Content-Type": "application/json"}
    });
    
    if (response.ok) { // if response is able 
        document.location.replace("../../controllers/dashboard-routes.js");
    } else { // if there was an issue meaning something was missing
        alert("Could not log you in :( Something went wrong");
    }
};

