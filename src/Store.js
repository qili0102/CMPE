import {createStore, combineReducers} from 'redux';

const reducer = combineReducers({
    users:null,
    post_projects:null,
    bid_projects:null,
    open_projects:null,
    bids:null
});

export default createStore(reducer);