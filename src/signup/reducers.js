import { USER_SIGNUP } from './actionTypes';
import axios from 'axios';
import store from '../Store';

const api = 'http://localhost:8080';

export default (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNUP: {
            axios.post(api+'/user', action.user).then(
                res=>{
                    console.log(res);
                    console.log(res.data);
                    console.log(action.user);
                    console.log(store.getState());
                    if (res.status===201) {
                        return {...state, isRegister: true};
                    }
                }
            );
            return {...state, isRegister: true};
        }
        default: {
            return state;
        }
    }
};