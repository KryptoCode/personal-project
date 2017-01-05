import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Sidebar from './components/Sidebar';
import userProfile from './containers/profile';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Sidebar} />
		<Route path="signin" component={userProfile} />
	</Route>
	)