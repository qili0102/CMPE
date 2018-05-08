import { GET_OPEN_PROJECTS } from "./actionTypes";

export const get_open_projects = (projects) => ({
    type: GET_OPEN_PROJECTS,
    payload: projects
});