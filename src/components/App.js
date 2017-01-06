import React, { Component } from 'react';
import 'aframe';
import UserProfile from '../containers/profile';
import Sidebar from './Sidebar';
import Setup from './Setup';
import Signin from './Signin';
import Signup from './RegisterForm';
import ContentContainer from './ContentContainer';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';


class App extends Component {
	render() {
		return (
			<Router history={hashHistory}>
        		<Route path='/' component={Container}>
        			<IndexRoute component={Signin} />
        			<Route path='/loggedout' component={Signin} />
          			<Route path='/profile' component={UserProfile} />
          			<Route path='/signup' component={Signup} />
          			<Route path='/setup' component={Setup} />
          		</Route>
      		</Router>
		);
	}
}

const Container = (props) => (
	<div className="wrapper">
			<div className="column-3">
				<div id="sidebar-container">
					<h1>The Construct</h1>
					{props.children}
				</div>
			</div>
			<div className="column-9 content-container">
				<ContentContainer />
			</div>
	</div>
);

const Address = () => <h1>We are located at 555 Jackson St.</h1>;

export default App;