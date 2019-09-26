import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import * as ROUTES from '../../constants/routes'
import SignOutButton from "../SignOut/SignOutButton";
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withFirebase} from "../Firebase";


const LoginMenu = ({logged, email}) => {
        // console.log(authUser)
    console.log(logged)
    console.log(email)
    // const email = email;

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
        {log === false && <LoginMenuNon/>}
        {log === true && <LoginMenuAuth email={email}/>}
        </div>
)
}


const LoginMenuNon = () => {
    return (
        <ul className='signBar' >
            <li className='item'>
                <Link className='item-link' to={ROUTES.SIGN_UP}>Załóż konto</Link>
            </li>
            <li className='item'>
                <Link className='item-link' to={ROUTES.SIGN_IN}>Zaloguj</Link>
            </li>
        </ul>
    )
}


const LoginMenuAuth = ({email}) => {

    return (
        <ul className='signBar' >
            <li>
                <div style={{color: 'black'}}>
                    {email}
                </div>
            </li>
            <li className='item'>
                <Link className='item-link' to={ROUTES.GIVEBACK}>Oddaj rzeczy</Link>
            </li>
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
    console.log(state)
    return {
        user: state.userData,
        logged: state.userData.logged,
        email: state.userData.email,
    }
}

// const mapDispatch = dispatch => ({authenticateUser: getUser => dispatch(getLogin(getUser))})
// store

export default compose(
    withFirebase,
    connect(mapState, null),)(LoginMenu);



// export default LoginMenu;
