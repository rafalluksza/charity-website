import React from 'react'
import {Link} from "react-router-dom";


const NavigationItem = (props) => {
    return (
        <li className='item'><Link className='item-link' to={props.href}>{props.name}</Link></li>
    )
}

export default NavigationItem;