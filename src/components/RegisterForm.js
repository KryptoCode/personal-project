import React from 'react';
import map from 'lodash/map';
import classnames from 'classnames';
import validateInput from '../../server/shared/validations/signupValid';


class RegisterForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			userEmail: '',
			password: '',
			passwordConfirmation: '',
			errors: {},
			isLoading: false

		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value});
	}

	isValid() {
		const { errors, isValid } = validateInput(this.state);

		if (!isValid) {
			this.setState({ errors });
		}

		return isValid;
	}

	onSubmit(e) {
		e.preventDefault();

		if (this.isValid()) {
			this.setState({ errors: {}, isLoading: true });
			this.props.userSignupRequest(this.state).then(
				() => {},
				(err) => this.setState({ errors: err.response.data, isLoading: false })
			);
		}
	}

	render() {
		const { errors } = this.state;
		return (
			<form onSubmit={this.onSubmit}>
				<div className={classnames("form-group", { 'has-error': errors.firstName})}>
					<label className="control-label">First Name:</label>
					<input
						value={this.state.firstName}
						onChange={this.onChange}
						type="text"
						name="firstName"
						className="form-control"
						/>
						{errors.firstName && <span className="help-block">{errors.firstName}</span>}
				</div>

				<div className={classnames("form-group", { 'has-error': errors.lastName})}>
					<label className="control-label">Last Name:</label>
					<input 
					value={this.state.lastName}
					onChange={this.onChange}
					type="text"
					name="lastName"
					className="form-control"
					/>
					{errors.lastName && <span className="help-block">{errors.lastName}</span>}
				</div>
				<div className={classnames("form-group", { 'has-error': errors.userEmail})}>
					<label className="control-label">E-Mail:</label>
					<input 
					value={this.state.userEmail}
					onChange={this.onChange}
					type="text"
					name="userEmail"
					className="form-control"
					/>
					{errors.userEmail && <span className="help-block">{errors.userEmail}</span>}
				</div>
				<div className={classnames("form-group", { 'has-error': errors.password})}>
					<label className="control-label">Password:</label>
					<input
						value={this.state.password}
						onChange={this.onChange}
						type="password"
						name="password"
						className="form-control"
						/>
						{errors.password && <span className="help-block">{errors.password}</span>}
				</div>
				<div className={classnames("form-group", { 'has-error': errors.passwordConfirmation})}>
					<label className="control-label">Password Confirmation:</label>
					<input 
					value={this.state.passwordConfirmation}
					onChange={this.onChange}
					type="password"
					name="passwordConfirmation"
					className="form-control"
					/>
					{errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
				</div>
				<div className="form-group">
					<button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
						Sign up
					</button>		
				</div>
			</form>
		);
	}
}

RegisterForm.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired
}

export default RegisterForm;