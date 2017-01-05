import React from 'react';
import 'aframe';
import UserProfile from '../containers/profile';
import Sidebar from './Sidebar';
import ContentContainer from './ContentContainer';



const App = () => (
	<div className="wrapper">
		<div className="row">
			<div className="column-3">
				<Sidebar />
			</div>
			<div className="column-9 content-container">
				<ContentContainer />
			</div>
		</div>
	</div>
);

export default App;