function sendMail(contactForm) {
    emailjs.send("gmail", "codeinstiute_api_project", { //The first argument is the service name, the second is the template name
        "from_name": contactForm.name.value, //This is a variable defined by the user via the site's form. It must be positioned in email.js using the {{from_name}} format 
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value,        
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // Block from loading a new page
}