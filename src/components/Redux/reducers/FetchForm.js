import {FETCH_FORM} from "../constants/actionTypes";

const fetchForm = (state = {}, action) => {
    switch (action.type) {
        case FETCH_FORM :
            return action.payload;
        default:
            return state;
    }
};