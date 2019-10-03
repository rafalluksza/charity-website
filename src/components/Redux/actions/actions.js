import {CHECK_LOG, SET_USER_EMAIL, GET_DATA} from "../constants/actionTypes";

// export const sendForm = form => async dispatch => {
//     forms.push().set(form)
// }
//
//
// export const fetchForm = () => async dispatch => {
//     forms.on('value', snapshot => {
//         dispatch({
//             type: FETCH_FORM,
//             payload: snapshot.val()
//         });
//     });
// };


export function getData(user) {
    return { type: GET_DATA, user}
}

export const checkLog = (logged) => {
    return { type: CHECK_LOG, logged }
}

export const setUserData = email => {
    return {type: SET_USER_EMAIL, email}
}

