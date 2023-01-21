
document.getElementById("myForm").addEventListener("submit", function(event) {
	event.preventDefault();
	validateForm();
  });
  function validateForm() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var error = "";
  
	// Check if the email field is empty
	if (!email) {
	  alert("Email is required");
	  email.focus();
	}
	// Check if the email field is a valid email
	else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
	  error = "Invalid email address";
	}
	// Check if the password field is empty
	else if (!password) {
	  error = "Password is required";
	}
	// Check if the password length is less than 8
	else if (password.length < 8) {
	  error = "Password must be at least 8 characters long";
	}
	// Check if the password has at least 1 uppercase letter, 1 lowercase letter, and 1 digit
	else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(password)) {
	  error = "Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 digit";
	}
	// Display an error message if the input is not valid
	if (error) {
	  alert(error);
	} else {
	  //Submit the form or do whatever you want to do
	}
  }
	