import {combineReducers} from 'redux';
import messageReducer from './MessageReducer';

const rootReducer = combineReducers({
    message: messageReducer
});

export default rootReducer;