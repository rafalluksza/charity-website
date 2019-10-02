import React from 'react';
import {compose} from "recompose";
import * as ROUTES from "../../constants/routes";
import { withRouter} from 'react-router-dom';
import {connect} from "react-redux";


const Button1 = ({history, logged}) => {

    const handleClick = () => {
        logged ?
            history.push(ROUTES.SIGN_IN) :
            history.push(ROUTES.GIVEBACK)

    }

    return (
        <button className='btn-custom' onClick={handleClick}>Oddaj <br/> rzeczy</button>
    )
}

const mapState = state => {
    return {
        logged: state.firebase.auth.isEmpty,
    }
}

export default compose(
    withRouter,
    connect(mapState,null))(Button1);
