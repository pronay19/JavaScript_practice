// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var uname = document.contactForm.uname.value;
    var pass = document.contactForm.pass.value;
    var conpass = document.contactForm.conpass.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;

    var pass_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    
    
    
	// Defining error variables with a default value
    var nameErr = emailErr = unameErr = passErr = conpassErr = mobileErr = countryErr = genderErr = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

     // Validate uname
    if(uname == "") {
        printError("unameErr", "Please enter your user name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(uname) === false) {
            printError("unameErr", "Please enter a valid user name");
        } else {
            printError("unameErr", "");
            unameErr = false;
        }
    }

     // Validate password
    if(pass=='')
    {
        alert('Please enter Password');
    }
    else if(conpass=='')
    {
        alert('Enter Confirm Password');
    }
    else if(!pass_expression.test(pass))
    {
        alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    }
    else if(pass != conpass)
    {
        alert('Password not Matched');
    }
    else if(document.getElementById("conpassErr").value.length < 6)
    {
        alert('Password minimum length is 6');
    }
    else if(document.getElementById("conpassErr").value.length > 12)
    {
        alert('Password max length is 12');
    }  
    else
    {                                    
        alert('Thank You for Login & You are welcome to pronays website');
           
           window.location = "welcome.html"; 
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[0-10]\d{10}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 11 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    
    // Validate country
    if(country == "Select") {
        printError("countryErr", "Please select your city");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }
    
    // Validate gender
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || unameErr || passErr || conpassErr || mobileErr || countryErr || genderErr) == true) {
       return false;
    }

   
};


function login(){

    var email = document.contactForm.email.value;
    var pass = document.contactForm.pass.value;

    var pass_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;


    // Defining error variables with a default value
    var  emailErr = passErr = true;


    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if(pass=='')
    {
        alert('Please enter Password');
    }
    
    else
    {                                    
        alert('Thank You for Login ');
           
           window.location = "welcome.html"; 
    }

    // Prevent the form from being submitted if there are any errors
    if((emailErr || passErr) == true) {
       return false;
    } 


};