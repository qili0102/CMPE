import {createStore, combineReducers} from 'redux';
import userReducer from './signup/reducers';

const reducer = combineReducers({
    users:userReducer,
    post_projects:null,
    bid_projects:null,
    open_projects:null,
    bids:null
});

// const initialState={
//     users: {isRegister: false, isLogin: false}
// };

// export default createStore(reducer, initialState);
export default createStore(reducer);