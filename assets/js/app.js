
function formValidation(){
	const formContact = document.getElementById('form-contact').value;
	const formUsername = document.getElementById('form-username').value;
	const formPassword = document.getElementById('form-password').value;
	const formFile = document.getElementById('form-file').value;
	const formSubmit = document.getElementById('form-submit').value;
	const errorMessage = document.getElementById('error-message').value;

	if(formUsername !== 'daria' || formUsername !== 'teo'|| formUsername !== 'moi' ) {
		errorMessage.innerHtml = 'incorrect username';
		return false;
	}else if(formPassword.length >5) {
		errorMessage.innerHtml = 'password incorrect' ;
		return false
	}
	
}