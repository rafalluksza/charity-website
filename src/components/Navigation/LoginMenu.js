import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import * as ROUTES from '../../constants/routes'
import SignOutButton from "../SignOut/SignOutButton";
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withFirebase} from "../Firebase";
import {setAdmin} from "../Redux/actions/actions"


const LoginMenu = ({logged, email, firebase, isAdmin}) => {

    const [log, setLog] = useState(false)

    const switchMenu = () => {
        switch (logged) {
            case true :
                return setLog(true) ;
            case false :
                return setLog(false);
            default :
                return setLog(false) ;
        }
    }

    useEffect(()=> {
        switchMenu()


    },[logged])



    return (
        <div>
        {log === true && <LoginMenuNon/>}
        {log === false && <LoginMenuAuth email={email} isAdmin={isAdmin}/>}
        </div>
)
}


const LoginMenuNon = () => {
    return (
        <ul className='signBar' >
            <li className='item'>
                <Link className='item-link' to={ROUTES.SIGN_IN}>Zaloguj</Link>
            </li>
            <li className='item'>
                <Link className='item-link gold-frame' to={ROUTES.SIGN_UP}>Załóż konto</Link>
            </li>
        </ul>
    )
}


const LoginMenuAuth = ({email, isAdmin}) => {

    return (
        <ul className='signBar' >
            <li>
                <div style={{color: 'black'}}>
                    { email ? <div> Cześć {email} </div> : <div/>}
                </div>
            </li>
            <li className='item'>
                <Link className='item-link' to={ROUTES.GIVEBACK}>Oddaj rzeczy</Link>
            </li>
            {isAdmin &&  <li className='item'>
                            <Link className='item-link' to={ROUTES.ADMIN}>Panel administracyjny</Link>
                        </li>}

            <li className='item'>
                <SignOutButton/>
            </li>
        </ul>
    )
}

// const LoginMenuAdmin = () => {
//
//     return (
//         <>
//             <li className='item'>
//                 <Link className='item-link' to={ROUTES.ADMIN}>Panel administracyjny</Link>
//             </li>
//             <li className='item'>
//                 <SignOutButton/>
//             </li>
//         </>
//     )
// }
//
const mapState = state => {
    return {
        logged: state.firebase.auth.isEmpty,
        email: state.firebase.auth.email,
        isAdmin: state.userData.admin,
    }
}





export default compose(
    withFirebase,
    connect(mapState),)(LoginMenu);
