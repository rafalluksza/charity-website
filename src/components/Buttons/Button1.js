import React from 'react';
import {compose} from "recompose";
import * as ROUTES from "../../constants/routes";
import { withRouter} from 'react-router-dom';


const Button1 = ({history}) => {

    const handleClick = () => {
        history.push(ROUTES.SIGN_IN);
    }

    return (
        <button className='btn-custom' onClick={handleClick}>Oddaj <br/> rzeczy</button>
    )
}

export default compose(withRouter)(Button1);

