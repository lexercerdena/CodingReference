$(document).ready(function() {
	const userName = document.querySelector('#userName');
	const password = document.querySelector('#password');
	const submitButton = document.querySelector('#submitButton');

	var errorMessage = "";
	var successMessage = "";
	var validUserName = "Lexing";
	var validPassword = "12345";

	function validateLogin() {
		if (validUserName == 'Lexing' || validPassword == '12345') {
			console.log(successMessage = "Successfully Login");
		} else {
			console.log(errorMessage = "Invalid Login");
		}

		if (userName.value == "") {
			console.log(errorMessage = "Please Input User Name");
		} else {
			console.log(userName.value);
		}

		if (password.value == "") {
			console.log(errorMessage = "Please Input Password");
		} else {
			console.log(password.value);
		}
	}	

	submitButton.onclick = function(e) {
		e.preventDefault();
		validateLogin();
	}
	
	
});