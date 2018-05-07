import { GET_USER_PROFILE } from "./actionTypes";

export const get_profile = (user) => ({
    type: GET_USER_PROFILE,
    payload: user
});