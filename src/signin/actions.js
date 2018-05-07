import { USER_LOGIN } from "./actionTypes";

export const login = (email) => ({
    type: USER_LOGIN,
    email: email
});