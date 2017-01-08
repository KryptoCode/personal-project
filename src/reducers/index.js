import {combineReducers} from 'redux';
import flashMessages from './flashMessages';

const allReducers = combineReducers({
	flashMessages
});

export default allReducers;