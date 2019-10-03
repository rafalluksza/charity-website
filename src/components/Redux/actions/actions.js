import {CHECK_LOG, SET_ADMIN, GET_DATA, SET_USER_DATA} from "../constants/actionTypes";

export function getData(user) {
    return { type: GET_DATA, user}
}

export const checkLog = (logged) => {
    return { type: CHECK_LOG, logged }
}

export const setAdmin = (admin) => {
    return { type: SET_ADMIN, admin }
}

export const setUserData = data => {
    return {type: SET_USER_DATA, data}
};


export const loginAction = (email, password) =>
    (dispatch, getState, getFirebase) => {
        const firebase = getFirebase()
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch( error => {
                console.log(error)
                return
            });
}


export const signupAction = (email, password) =>
    (dispatch, getState, getFirebase) => {
        const firebase = getFirebase()
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(authUser => {
                return firebase
                    .database().ref('users/'+ authUser.user.uid)
                    .set({
                        username: email,
                        email: email,
                        password: password,
                        admin: false,
                    });
            })
            .catch(error => console.log(error))
}

export const signoutAction = () =>
    (dispatch, getState, getFirebase) => {
        const firebase = getFirebase()
        firebase
            .auth()
            .signOut()
}
