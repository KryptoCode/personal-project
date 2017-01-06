import React from 'react';

class Signin extends React.Component {
	render() {
		return (
			<div className="signInContainer">
				<form className="form-horizontal">
					<fieldset>
						<div className="form-group">
							<label htmlFor="inputUsername" className="control-label">Username:</label>
								<input id="inputUsername" type="text" placeholder="Username" className="form-control" /> 
							<label htmlFor="inputPassword" className="control-label">Password:</label>
								<input id="inputPassword" type="password" placeholder="password" className="form-control" />
						</div>
						<div className="form-group">
							<button id="submit-btn" type="submit" className="btn btn-primary btn-block">Sign in</button>
							<button id="register-btn" type="submit" value="Register" className="btn btn-default btn-block">Register</button>
						</div>
					</fieldset>
				</form>
			</div>
		);
	}
} 

export default Signin;