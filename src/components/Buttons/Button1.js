import React from 'react';
import {Link} from 'react-router-dom'


const Button1 = () => {

    const handleClick = () => {
        console.log('click')
    }

    return (
        <button className='btn-custom' onClick={handleClick}><Link to='/logowanie'>Oddaj <br/> rzeczy </Link></button>
    )
}

export default Button1;