import React, {Component} from 'react';
import Signin from './Signin';
import Setup from './Setup';
import UserProfile from '../containers/profile';

class Sidebar extends Component {
	render() {
		return (
			<div id="sidebar-container">
				
				<h1>Load VR</h1>
				<Signin />

			</div>
		);
	}
}

export default Sidebar;