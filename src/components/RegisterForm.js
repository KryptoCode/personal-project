import React from 'react';

class RegisterForm extends Component {
	render() {
		return (
			<div>
				<form>
					<label for="firstName">First Name:</label>
					<input type="text" id="firstName" />
					<label for="lastName">Last Name:</label>
					<input type="text" id="lastName" />
					<label for="userEmail">E-Mail:</label>
					<input type="text" id="userEmail" />
					<input id="form-submit-btn" type="submit" value="Submit" />		
				</form>
			</div>
		);
	}
}

export default RegisterForm;