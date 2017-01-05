import React, { Component } from 'react';
import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import Camera from './Camera';
import Sky from './Sky';



class ContentContainer extends Component {

	render() {
		return (
				<Scene className="aFrameBox" embedded>
			        <Entity light={{type: 'ambient', color: '#2C3E50'}}/>
        			<Entity light={{type: 'directional', intensity: 0.5}} position='-1 1 0'/>
        			<Entity light={{type: 'directional', intensity: 1}} position='1 1 0'/>
			      	
					<a-plane rotation="-90 0 0" width="10" height="10" color="#69696A" opacity=".9"></a-plane>

					<Entity 
					geometry='primative: box; depth: 6; height: 6; width: 6'
					material={{color: '#69696A', opacity: 0.9}}
					position='1 4 -7'
					/>			
			      	
			      	<Sky src="url(http://localhost:8080/360/matrix.png)"/>
			      	<Entity position="0 1 3.2">
			        	<Camera></Camera>
			      	</Entity>
    			</Scene>
		);
	}
}

export default ContentContainer;