import { combineReducers } from 'redux';
import todoreducer from './todoreducer';
import visibilityreducer from './visibilityreducer';
export default combineReducers({
    todos: todoreducer,
    visibilityfilter: visibilityreducer
});