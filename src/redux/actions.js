/*
action types
 */

export const ADD_LOGIN = 'ADD_LOGIN';
export const CHECK_ADMIN = 'CHECK_ADMIN';

/*
action creators
 */

export function addLogin(text) {
    return {type: ADD_LOGIN, text}
}

export function checkAdmin(text) {
    return {type: CHECK_ADMIN, text}
}