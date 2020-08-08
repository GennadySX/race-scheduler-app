import {combineReducers} from 'redux';
import driver from '../reducers/Driver';
import races from '../reducers/Race';
const rootReducer = combineReducers({
    driver,
    races
});
export default rootReducer;
