import React from 'react'
import {Link} from "react-router-dom";
import * as ROUTES from '../../constants/routes'
import SignOutButton from "../SignOut/SignOutButton";

const SignBar = () => {


    return (
        <>
            <li className='item'>
                <Link className='item-link' to={ROUTES.SIGN_UP}>Załóż konto</Link>
            </li>
            <li className='item'>
                <Link className='item-link' to={ROUTES.SIGN_IN}>Zaloguj</Link>
            </li>
        </>
    )
}

export default SignBar;


const SignBarAuth = () => {

    return (
        <>
            <li className='item'>
                <Link className='item-link' to={ROUTES.GIVEBACK}>Oddaj rzeczy</Link>
            </li>
            <li className='item'>
                <SignOutButton/>
            </li>
        </>
    )
}

const SignBarAdmin = () => {

    return (
        <>
            <li className='item'>
                <Link className='item-link' to={ROUTES.ADMIN}>Panel administracyjny</Link>
            </li>
            <li className='item'>
                <SignOutButton/>
            </li>
        </>
    )
}