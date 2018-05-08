import { GET_OPEN_PROJECTS } from './actionTypes';

export default function openProjectReducer (state = [], action) {
    switch (action.type) {
        case GET_OPEN_PROJECTS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}