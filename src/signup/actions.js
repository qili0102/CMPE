import { USER_SIGNUP } from "./actionTypes";

export const signup = (_user) => ({
    type: USER_SIGNUP,
    user: _user
});