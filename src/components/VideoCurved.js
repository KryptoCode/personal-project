import {Entity} from 'aframe-react';
import React from 'react';
	
export default props => (
	<Entity geometry={{primitive: 'cylinder', height: 3, openEnded: 'true', thetaLength: 120}}
          	material={{src: props.src, side: 'double', loop: 'false'}}
          	rotation="0 120 0"
          	scale="6 2 6"
          	position="0 3 0" />
	);
			      	