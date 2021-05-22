const withAuth = (req, res, next) => {
    if (!req.session.userId) {  // if the request came back empty. 
        res.redirect("/login"); // go to the login page if it was missing
    }   else {
        next(); // if all is well, then it will contunue to the next session 
    }
}; 

// exporting
module.exports = withAuth; // will be used in dashboard-routes.js