// Attach event listener to the form submit
document.getElementById("signupForm").addEventListener("submit", function(event) {
    // Prevent form submission until validation is complete
    event.preventDefault();
    
    // Get values from the form fields
    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password_1").value;
    const cpass = document.getElementById("password_2").value;

    // Check if passwords match
    if (name!= "" && email != "" && pass === cpass) {
        window.location.href = "../home/home.html";
        alert("Signup successful.");
    }else if (name!= "" || email !=""){
        alert("Give the required inputs.");
        return;
    }else {
        alert("Passwords do not match. Please try again.");
        return;
    }

    

    // If validation passes, submit the form (or handle redirect as per your flow)
     // Redirect user to home page

});
