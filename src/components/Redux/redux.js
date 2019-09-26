


// reducer

 const giveBack = (state = [], action)=> {
     switch (action.type) {
         case 'ADD_FIRST_STEP' : {
             return [
                 ...state,
                 {
                     id: action.id,
                     array: action.array
                 }
             ]}
         default:
             return state;
     }
 }

 export default giveBack;



//actions

 export const addFirstStep = array => ({
     type: 'ADD_FIRST_STEP',
     id: 'first_step',
     array
 })






// store
import {createStore} from "redux";

const store = createStore(
    giveBack, []
);


console.log(store.getState());