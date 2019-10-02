import {GET_DATA, CHECK_LOG, SET_ADMIN, SET_USER_DATA} from "../constants/actionTypes";
let STATE = {admin: false};

const userData = (state = STATE, action) => {
    switch (action.type) {
        case GET_DATA: {
            return {
                ...state,
                user: action.user
            }
        }
        case CHECK_LOG: {
            return {
                ...state,
                logged: action.logged
            }
        }
        case SET_ADMIN: {
            return {
                ...state,
                admin: action.admin,
            }
        }
        case SET_USER_DATA: {
            return {
                ...state,
                data: action.data,
                email: action.data.email,
                logged: true,
                uid: action.data.uid
            }
        }
        default :
            return state
    }
}
export default userData;