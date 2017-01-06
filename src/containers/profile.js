import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class userProfile extends Component {
	loadUser() {
		return this.props.users.map((user) => {
			var keySaved = 2;
			if (user.id === keySaved)
			return (
				<div key={user.id}>
					<img className="userAvatar" src={user.avatar}/><br />
					<div className="userDetails">
						<div className="nameContainer"><h5>Name:</h5> <h4>{user.first_name} {user.last_name}</h4></div>
						<div className="emailContainer"><h5>Email:</h5> <h5>{user.email}</h5></div>
						<div className="joinedContainer"><h5>Joined:</h5> <h6>{user.date_joined}</h6></div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="userProfileContainer">
				{this.loadUser()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		users: state.users
	};
}

export default connect(mapStateToProps)(userProfile);