import React from 'react'
import {Link} from "react-scroll";
// import {NavLink} from "react-router-dom";


const NavigationItem = (props) => {
    const path = window.location.pathname;
    console.log(path)
    // if (path ===)



    return (
        <li className='item'><Link className='item-link' activeClass='active' smooth={true} isDynamic={true} to={props.href}>{props.name}</Link></li>
    )
}

export default NavigationItem;