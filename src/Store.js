import {createStore, combineReducers} from 'redux';
import {reducer as userReducer} from './signup';

const reducer = combineReducers({
    users:userReducer,
    post_projects:null,
    bid_projects:null,
    open_projects:null,
    bids:null
});

export default createStore(reducer);