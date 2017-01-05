import React, {Component} from 'react';


class Sidebar extends Component {
	render() {
		return (
			<div id="sidebar-container" className="wrapper">
				<div className="column-12">
					<div className="row">
						<h1>Load VR</h1>
					</div>
					<div className="row">
						<form>
							<input type="text" placeholder="username" /> 
							<br />
							<input type="password" placeholder="password" />
							<br />
							<input id="submit-btn" type="submit" value="Sign in" />
							<br />
							<input id="register-btn" type="submit" value="Register" />
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Sidebar;