import React from 'react'
import {Link} from "react-scroll";
import * as ROUTES from './../../constants/routes';



const Navigation = () => {
    return (
        <>
            <li className='item'>
                <Link className='item-link' activeClass='active' smooth={true} isDynamic={true} to={ROUTES.LANDING}>Start</Link>
            </li>
            <li className='item'>
                <Link className='item-link' activeClass='active' smooth={true} isDynamic={true} to='simpleSteps'>O co chodzi?</Link>
            </li>
            <li className='item'>
                <Link className='item-link' activeClass='active' smooth={true} isDynamic={true} to='about'>O nas</Link>
            </li>
            <li className='item'>
                <Link className='item-link' activeClass='active' smooth={true} isDynamic={true} to='who'>Fundacja i organizacje</Link>
            </li>
            <li className='item'>
                <Link className='item-link' activeClass='active' smooth={true} isDynamic={true} to='contact'>Kontakt</Link>
            </li>
        </>
    )
}

export default Navigation;