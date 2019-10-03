import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import firebase from 'firebase/app';
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import {reducer as formReducer} from "redux-form";
import userData from "../reducers/UserData";
import { firebaseReducer , reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import { config as firebaseConfig } from '../../Firebase/firebase';


// react-redux-firebase options

const config = {
    // userProfile: 'users', // firebase root where user profiles are stored
    // enableLogging: true, // enable/disable Firebase's database logging
    onAuthStateChanged: true,
};


const middleware = [thunk.withExtraArgument(getFirebase), logger];

const rootReducer = combineReducers({
    userData,
    firebase: firebaseReducer,
    form: formReducer,
});

firebase.initializeApp(firebaseConfig)

// Add redux Firebase to compose
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, config)
)(createStore);

const store = createStoreWithFirebase(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)),);

export default store;