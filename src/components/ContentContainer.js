import React, { Component } from 'react';
import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import Camera from './Camera';
import Sky from './Sky';
import Ground from './Ground';
import VideoCurved from './VideoCurved';



class ContentContainer extends Component {

	render() {
		return (
				<Scene className="aFrameBox" embedded>
			        <Entity light={{type: 'ambient', color: '#767D85'}}/>
        			<Entity light={{type: 'directional', intensity: 0.5}} position='-1 1 0'/>
        			<Entity light={{type: 'directional', intensity: 1}} position='1 1 0'/>
			      	


			      	<Ground src="url(http://localhost:8080/360/floorWT.jpg)" repeat="5000 5000"/>
			      	<Sky src="url(http://localhost:8080/360/matrix.png)"/>
			      	<Entity position="0 1 3.2">
			        	<Camera></Camera>
			      	</Entity>
    			</Scene>
		);
	}
}

export default ContentContainer;