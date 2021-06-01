//function 
const logoutFunction = async function() {
    
    // retreiving using input information 
    const response = await fetch("/api/user/logout", {
      method: "POST", // updating the current file
      headers: { "Content-Type": "application/json" }, 
    });
  
    // did it go well? 
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Could not log you out. You're staying :D ");
    }
  };
  
  /* -- Event Listener -- */
  // document.querySelector(" ").addEventListener('click', logoutFunction);