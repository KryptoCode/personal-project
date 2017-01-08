import React from 'react';
import TextFieldGroup from './common/TextFieldGroup';
import validateInput from '../../server/shared/validations/login';
import { connect } from 'react-redux';
import { login } from '../actions/login';




class SigninForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			identifier: '',
			password: '',
			errors: {},
			isLoading: false
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
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
			this.props.login(this.state).then(
				(res) => this.context.router.push('/setup'),
				(err) => this.setState({ errors: err.data.errors, isLoading: false })
			);
		}
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		const { errors, identifier, password, isLoading } = this.state;

		return (
			<form onSubmit={this.onSubmit}>
				{ errors.form && <div className="alert alert-danger">{errors.form}</div> }
				
		        <TextFieldGroup
		          field="identifier"
		          label="Login with email"
		          value={identifier}
		          error={errors.identifier}
		          onChange={this.onChange}
		        />

		        <TextFieldGroup
		          field="password"
		          label="Password"
		          value={password}
		          error={errors.password}
		          onChange={this.onChange}
		          type="password"
		        />


				<div className="form-group">
					<button id="submit-btn" className="btn btn-primary btn-block" disabled={isLoading}>Sign in</button>
					<button id="register-btn" className="btn btn-default btn-block">Register</button>
				</div>
			</form>
		);
	}
}

SigninForm.propTypes = {
  login: React.PropTypes.func.isRequired
}

SigninForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, { login })(SigninForm);


