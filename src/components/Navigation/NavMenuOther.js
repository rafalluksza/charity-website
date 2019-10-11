import React from 'react'
import {Link} from 'react-router-dom';
import * as ROUTES from './../../constants/routes';



const NavMenuOther = () => {
    return (
        <ul className='navigationOther'>
            <li className='item'>
                <Link className='item-link' to={ROUTES.LANDING}>Start</Link>
            </li>
        </ul>
    )
}

export default NavMenuOther;