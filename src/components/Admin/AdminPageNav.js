import React from "react";
import {Link} from "react-router-dom";

export const AdminPageNav = ({match}) => {



    return (
        <div>
            <ul className='nav m-3'>
                <li className='nav-item' ><Link className='nav-link' to={`${match.url}/messages`}>Wiadomości</Link></li>
                <li className='nav-item' ><Link className='nav-link' to={`${match.url}/users`}>Użytkownicy</Link></li>
                <li className='nav-item' ><Link className='nav-link' to={`${match.url}/who`}>Organizacje</Link></li>
            </ul>
        </div>
    )
}

