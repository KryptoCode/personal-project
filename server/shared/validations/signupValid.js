import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';


export default function validateInput(data) {

		let errors = {};

		if (Validator.isEmpty(data.firstName ? data.firstName : '')) {
			errors.firstName = 'This field is required';
		}
		if (Validator.isEmpty(data.lastName ? data.lastName : '')) {
			errors.lastName = 'This field is required';
		}  
		if (Validator.isEmpty(data.userEmail ? data.userEmail : '')) {
			errors.userEmail = 'This field is required';
		} 
		if (!Validator.isEmail(data.userEmail ? data.userEmail : '')) {
			errors.userEmail = 'Email is invalid';
		}
		if (Validator.isEmpty(data.password)) {
			errors.password = 'This field is required';
		}
		if (Validator.isEmpty(data.passwordConfirmation)) {
			errors.passwordConfirmation = 'This field is required';
		}
		if (!Validator.equals(data.password, data.passwordConfirmation)) {
			errors.passwordConfirmation = 'Passwords must match';
		}

		return {
			errors,
			isValid: isEmpty(errors)
		}
	}
