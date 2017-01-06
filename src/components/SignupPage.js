import React from 'react';
import RegisterForm from './RegisterForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../actions/signupActions';

class SignupPage extends React.Component {
	render() {
		const { userSignupRequest } = this.props;
		return (
			<div>
				<RegisterForm userSignupRequest={userSignupRequest} />
			</div>
		);

	}
}

SignupPage.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(SignupPage);