import React from 'react'
import {withFirebase} from "../Firebase";
import * as ROUTES from "../../constants/routes";
import {compose} from 'recompose';
import { withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {signoutAction} from "../Redux/actions/actions";



const SignOutButton = (props) => {

    const handleClick = () => {
        props.signoutAction();
        props.history.push(ROUTES.LOG_OUT);
    }

    return (
    <button className='btn-logout' type='button' onClick={handleClick}> Wyloguj </button>
)};

const mapDispatch = dispatch => ({
    signoutAction: () => dispatch(signoutAction())
})

export default compose(
    withFirebase,
    withRouter,
    connect(null,mapDispatch))(SignOutButton);