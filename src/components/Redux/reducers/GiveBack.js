import {ADD_FORM, NEXT_STEP, PREV_STEP} from "../constants/actionTypes";

const INTIAL_STATE = {};
const giveBack = (state = INTIAL_STATE, action)=> {
    switch (action.type) {
        case ADD_FORM : {
            return [
        ...state,
                {
                    id: action.id,
                    array: action.array
                }
        ]}
        case NEXT_STEP : {
            return [

            ]
        }
        case PREV_STEP: {
            return [

            ]
        }
        default:
            return state;
        }
    }

export default giveBack;