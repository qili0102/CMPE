import { ADD_PROJECT } from './actionTypes';

export default function currentProjectReducer (state = {}, action) {
    switch (action.type) {
        case ADD_PROJECT: {
            return {...state, title: action.payload};
        }
        default: {
            return state;
        }
    }
}