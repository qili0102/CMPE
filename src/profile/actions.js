import { 
    GET_USER_PROFILE, 
    UPDATE_PROFILE } from "./actionTypes";

export const get_profile = (user) => ({
    type: GET_USER_PROFILE,
    payload: user
});
export const update_profile = (user) => ({
    type: UPDATE_PROFILE,
    payload: user
});