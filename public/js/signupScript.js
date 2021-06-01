const { response } = require("express"); // auto populated when I used " if (response) "

// where the magic happens
const signupHandler; 


// create sign up or show that there is a problem 
if (response.ok) {
    document.location.replace("/dashboard");
} else {
    window.alert("Oh no! We couldn't sign you up."); 
}


/* --Event Handler-- */
const signupE1; // querySelector(" "); 

//trigger 
// signupE1.addEventListener("submit", signupHandler); 