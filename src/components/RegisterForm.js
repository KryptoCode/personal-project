import React, { Component } from 'react';


class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			userEmail: '',
			password: '',
			passwordConfirmation: '',

		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value});
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.userSignupRequest(this.state);
	}

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<div className="form-group">
					<label className="control-label">First Name:</label>
					<input
						value={this.state.firstName}
						onChange={this.onChange}
						type="text"
						name="firstName"
						className="form-control"
						/>
					<label className="control-label">Last Name:</label>
					<input 
					value={this.state.lastName}
					onChange={this.onChange}
					type="text"
					name="lastName"
					className="form-control"
					/>
					<label className="control-label">E-Mail:</label>
					<input 
					value={this.state.userEmail}
					onChange={this.onChange}
					type="text"
					name="userEmail"
					className="form-control"
					/>
					<label className="control-label">Password:</label>
					<input
						value={this.state.password}
						onChange={this.onChange}
						type="password"
						name="password"
						className="form-control"
						/>
					<label className="control-label">Password Confirmation:</label>
					<input 
					value={this.state.passwordConfirmation}
					onChange={this.onChange}
					type="password"
					name="passwordConfirmation"
					className="form-control"
					/>
					
				</div>
				<div className="form-group">
					<button className="btn btn-primary btn-lg">
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