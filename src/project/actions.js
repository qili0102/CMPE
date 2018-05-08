import { GET_POST_PROJECTS, ADD_PROJECT } from "./actionTypes";

export const get_post_projects = (project) => ({
    type: GET_POST_PROJECTS,
    payload: project
});
export const add_project = (title) => ({
    type: ADD_PROJECT,
    payload: title
});