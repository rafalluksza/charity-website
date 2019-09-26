import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import giveBack from "../reducers/GiveBack";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import {reducer as formReducer} from "redux-form";
import userData from "../reducers/UserData";

const middleware = [thunk, logger];

const rootReducer = combineReducers({
    giveBack,
    userData,
    form: formReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;