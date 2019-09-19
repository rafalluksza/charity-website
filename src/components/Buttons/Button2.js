import React from 'react';
import {Link} from "react-router-dom";



const Button2 = () => {

    return (
        <button className='btn-custom'><Link to='/logowanie'>Zorganizuj <br/>zbiórkę </Link></button>
    )
}

export default Button2;