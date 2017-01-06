import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
					<Entity 
			      	 	position="0 0 0"
			      	 	rotation="-90 0 0"
        				geometry={{primitive: 'plane', width: 10000, height: 10000}}
        				material={{src: props.src, repeat: props.repeat,metalness:0.5, roughness: 0.2}}/>
					);