document.getElementById("signup").onclick = function () {
    let userName=document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;


    //  if (userPassword !== conform_password) {
    //     alert("Passwords do not match.");
    //     return;
    //   }
    let params = {
        "userName":userName,
        "userEmail": userEmail,
        "userPassword": userPassword,
        "roleId":2
    };
  
    const signup = async () => {
      let req = await request(
        "POST",
        "http://localhost:8080/user/create",
        params
      );
      let message = req.message;
      console.log(req)
    }
    signup();
   
  }
  function validateSignUp() {
    var username = document.getElementById("Username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var error = "";
  
    // Check if the username field is empty
    if (!username) {
      error = "Username is required";
    }
    // Check if the email field is empty
    else if (!email) {
      error = "Email is required";
    }
    // Check if the email field is a valid email
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      error = "Invalid email address";
    }
    // Check if the password field is empty
    else if (!password) {
      error = "Password is required";
    }
    // Check if the confirm password field is empty
    else if (!confirmPassword) {
      error = "Confirm Password is required";
    }
    // Check if the password and confirm password fields match
    else if (password !== confirmPassword) {
      error = "Passwords do not match";
    }
    // Check if the checkbox is not selected
    // else if (!document.getElementById("checkbox").checked) {
    //   error = "Please accept the Term & Conditions";
    // }
    // Display an error message if the input is not valid
    if (error) {
      event.preventDefault();
  
      alert(error);
      return false;
    } else {
      return true;
    }
  }
