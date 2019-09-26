import React from 'react'
import {withFirebase} from "../Firebase";
import * as ROUTES from "../../constants/routes";
import {compose} from 'recompose';
import { withRouter} from 'react-router-dom';



const SignOutButton = (props) => {

    const handleClick = () => {
        props.firebase.doSignOut();
        props.history.push(ROUTES.LOG_OUT);
    }

    return (
    <button type='button' onClick={handleClick}> Wyloguj </button>
)};

export default compose(
    withFirebase,
    withRouter)(SignOutButton);