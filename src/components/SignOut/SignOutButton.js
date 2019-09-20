import React from 'react'
import {withFirebase} from "../Firebase";
import {Link} from "react-router-dom";


const SignOutButton = ({firebase}) => (
    <button type='button' onClick={firebase.doSignOut}><Link to='/wylogowano'> Wyloguj </Link></button>
);

export default withFirebase(SignOutButton);