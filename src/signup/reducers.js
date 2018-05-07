import { USER_SIGNUP } from './actionTypes';
import {USER_LOGIN} from '../signin/actionTypes';
import {USER_SIGNOUT} from '../header/actionTypes';
import { GET_USER_PROFILE } from '../profile/actionTypes';

export default function userReducer (state = {isRegister: false, isLogin: false}, action) {
    switch (action.type) {
        case USER_SIGNUP: {
            return {...state, isRegister: true};
        }
        case USER_LOGIN: {
            return {...state, isLogin: true, email: action.email};
        }
        case USER_SIGNOUT: {
            return {...state, isLogin: false, isRegister: false, email: null};
        }
        case GET_USER_PROFILE: {
            console.log(action.payload);
            return {...state, ...action.payload};
        }
        default: {
            return state;
        }
    }
}