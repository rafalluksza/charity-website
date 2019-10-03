import React from 'react';
import * as ROUTES from "../../constants/routes";
import { withRouter} from 'react-router-dom';
import {compose} from "recompose";


const ButtonHP = ({history}) => {

    const handleClick = () => {
        history.push(ROUTES.LANDING);
    }

    return (
        <button className='btn-custom' onClick={handleClick}>Strona główna</button>
    )
}

export default compose(withRouter)(ButtonHP);