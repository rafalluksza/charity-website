import React from 'react';
import * as ROUTES from "../../constants/routes";
import { withRouter} from 'react-router-dom';
import {compose} from "recompose";
import {connect} from "react-redux";

const Button2 = ({history, logged}) => {
    const handleClick = () => {
        logged ?
            history.push(ROUTES.SIGN_UP) :
            history.push(ROUTES.GIVEBACK)
    }

    return (
        <button className='btn-custom' onClick={handleClick}>Zorganizuj <br/>zbiórkę</button>
    )
}

const mapState = state => {
    return {
        logged: state.firebase.auth.isEmpty,
    }
}

export default compose(
    withRouter,
    connect(mapState,null))(Button2);