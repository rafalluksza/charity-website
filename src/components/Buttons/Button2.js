import React from 'react';
import * as ROUTES from "../../constants/routes";
import { withRouter} from 'react-router-dom';
import {compose} from "recompose";

const Button2 = ({history}) => {

    const handleClick = () => {
        history.push(ROUTES.SIGN_UP);
    }

    return (
        <button className='btn-custom' onClick={handleClick}>Zorganizuj <br/>zbiórkę</button>
    )
}

export default compose(withRouter)(Button2);