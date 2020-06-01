import {combineReducers} from 'redux'
import errorReducer from './errorReducer';
import watchReducer from './watchReducer';


export default combineReducers({
    errors:errorReducer,
    watch:watchReducer

});