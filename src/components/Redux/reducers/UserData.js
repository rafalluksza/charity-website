import {GET_DATA, CHECK_LOG, SET_USER_EMAIL} from "../constants/actionTypes";
let STATE = {logged:false};

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
        case SET_USER_EMAIL: {
            return {
                ...state,
                email: action.email
            }
        }
        default :
            return state
    }
}

export default userData;